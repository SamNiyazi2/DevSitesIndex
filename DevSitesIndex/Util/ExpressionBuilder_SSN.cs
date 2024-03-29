﻿using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
using SSN_GenUtil_StandardLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

// 09/14/2019 04:53 am - SSN - [20190914-0227] - [005] - Creating dynamic process to process data in the catch block
// https://stackoverflow.com/questions/2297502/dynamically-build-linq-lambda-expression

namespace DevSitesIndex.Util
{

    // https://stackoverflow.com/questions/2297502/dynamically-build-linq-lambda-expression

    //  public static class Expression_Generate_103_Extensions  
    public static class ExpressionBuilder_SSN
    {



        // For reference:
        // "==,  <,  >, >=, <= , !=, &&, ||, LIKE, NOTLIKE";
        // https://www.dvteclipse.com/documentation/svlinter/How_to_use_special_characters_in_XML.3F.html
        // <param name="opr">&#61;&#61;,  &#60;,  &#62;, &#62;&#61;, &#60;= , &#33;&#61;, &#38;&#38;, &#124;&#124;, LIKE, NOTLIKE</param>



        /// <summary>
        /// Creates an expression that evaluate to a boolean (comparing two columns) or return a result set to determine if a record exists.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="entityx">The table being updated.</param>
        /// <param name="record">The current record being added or updated.</param>
        /// <param name="andOrOperator">"and" | "or" | "": When combining two or more expressions. Leave blank otherwise.</param>
        /// <param name="propName">The property being evaluated (Column name)</param>
        /// <param name="opr">&#61;&#61;,  &#60;,  &#62;, &#62;&#61;, &#60;= , &#33;&#61;, &#38;&#38;, &#124;&#124;, LIKE, NOTLIKE</param>
        /// <param name="value">The value being compared to. If you are checking if an employee exists, this would be the employee ID.</param>
        /// <param name="expr">When combining more than on expression, pass the previous one in.</param>
        /// <returns></returns>


        public static ExpressionBuilderResults_SSN<T> CreateExpression<T>(DbSet<T> entityx, T record, string andOrOperator, string propName, string opr, object value, Expression<Func<T, bool>> expr = null) where T : class
        {

            ExpressionBuilderResults_SSN<T> results = new ExpressionBuilderResults_SSN<T>();

            // Expression<Func<T, bool>> result = ToExpression<T>(andOrOperator, propName, opr, value, expr);
            TempDTO<T> result_dto = ToExpression<T>(andOrOperator, propName, opr, value, expr);

            Func<T, bool> test1 = result_dto.func.Compile();  /// Evaluate
            results.ConditionIsTrueForTheCurrentRecord = test1(record);


            // This creates and express to evaluate to something like "entity.where ( r=> r.propertyName == value).FirstOrDefault()
            IQueryable<T> queryableData = entityx;

            MethodCallExpression whereCallExpression = Expression.Call(
                                                                        typeof(Queryable),
                                                                        "Where",
                                                                        new Type[] { queryableData.ElementType },
                                                                        queryableData.Expression,
                                                                        result_dto.func);

            IQueryable<T> tableQueryResult = queryableData.Provider.CreateQuery<T>(whereCallExpression);

            results.ConditionIsTrueForTheTable = tableQueryResult != null;

            results.func = result_dto.func;

            return results;

        }

        class TempDTO<T>
        {
            public Expression<Func<T, bool>> func { get; set; }
            public Expression binExpr { get; set; }

        }



        private static TempDTO<T> ToExpression<T>(string andOrOperator, string propName, string opr, object value, Expression<Func<T, bool>> expr = null)
        {

            // SSN_Logger logger = (SSN_Logger)GetMeSomeServiceLocator.Instance.GetService(typeof(SSN_Logger));
            // 09/15/2019 09:47 pm - SSN - Revised
            ILogger_SSN logger = (ILogger_SSN)GetMeSomeServiceLocator.Instance.GetService(typeof(ILogger_SSN));

            Expression<Func<T, bool>> func = null;
            Expression binExpr = null;

            try
            {
                ParameterExpression paramExpr = Expression.Parameter(typeof(T));
                var arrProp = propName.Split('.').ToList();
                // Expression binExpr = null;
                string partName = string.Empty;
                arrProp.ForEach(x =>
                {
                    Expression tempExpr = null;
                    partName = partName.IsNull() ? x : partName + "." + x;
                    if (partName == propName)
                    {
                        var member = NestedExprProp(paramExpr, partName);
                        var type = member.Type.Name == "Nullable`1" ? Nullable.GetUnderlyingType(member.Type) : member.Type;
                        tempExpr = ApplyFilter(opr, member, Expression.Convert(ToExprConstant(type, value), member.Type));
                    }
                    else
                        tempExpr = ApplyFilter("!=", NestedExprProp(paramExpr, partName), Expression.Constant(null));
                    if (binExpr != null)
                        binExpr = Expression.AndAlso(binExpr, tempExpr);
                    else
                        binExpr = tempExpr;
                });


                Expression<Func<T, bool>> innerExpr = Expression.Lambda<Func<T, bool>>(binExpr, paramExpr);
                if (expr != null)
                {
                    bool useAnd = andOrOperator.IsNull() || andOrOperator.ToUpper() == "AND" || andOrOperator == "&&";

                    innerExpr = useAnd ? innerExpr.And(expr) : innerExpr.Or(expr);
                }

                func = innerExpr;
            }
            catch (Exception ex)
            {

                string errorMessage = ex.Message;
                logger.PostException(ex, "20190914-0749", "ExpressionBuilder_SSN Error");
            }

            TempDTO<T> dto = new TempDTO<T> { func = func, binExpr = binExpr };
            //return func;
            return dto;
        }




        static bool IsNull(this string value)
        {
            return string.IsNullOrWhiteSpace(value);
        }




        static MemberExpression NestedExprProp(Expression expr, string propName)
        {
            string[] arrProp = propName.Split('.');
            int arrPropCount = arrProp.Length;

            if (arrPropCount > 1)
            {
                string z = arrProp.Take(arrPropCount - 1).Aggregate((a, i) => a + "." + i);

                MemberExpression y = NestedExprProp(expr, z);

                MemberExpression x = Expression.Property(y, arrProp[arrPropCount - 1]);

                return x;
            }
            else
            {
                return Expression.Property(expr, propName);

            }

        }






        private static Expression ToExprConstant(Type prop, object value)
        {
            if (value == null)
                return Expression.Constant(value);

            object val = null;

            switch (prop.FullName)
            {
                case "xxxxxxxxxxxxxSystem.Guid":
                    //xxxxxxxxxxxxxxxval = value.ToGuid();
                    break;
                default:
                    val = Convert.ChangeType(value, Type.GetType(prop.FullName));
                    break;
            }
            return Expression.Constant(val);
        }









        private static Expression ApplyFilter(string opr, Expression left, Expression right)
        {
            Expression InnerLambda = null;
            switch (opr)
            {
                case "==":
                case "=":
                    InnerLambda = Expression.Equal(left, right);
                    break;
                case "<":
                    InnerLambda = Expression.LessThan(left, right);
                    break;
                case ">":
                    InnerLambda = Expression.GreaterThan(left, right);
                    break;
                case ">=":
                    InnerLambda = Expression.GreaterThanOrEqual(left, right);
                    break;
                case "<=":
                    InnerLambda = Expression.LessThanOrEqual(left, right);
                    break;
                case "!=":
                    InnerLambda = Expression.NotEqual(left, right);
                    break;
                case "&&":
                    InnerLambda = Expression.And(left, right);
                    break;
                case "||":
                    InnerLambda = Expression.Or(left, right);
                    break;
                case "LIKE":
                    InnerLambda = Expression.Call(left, typeof(string).GetMethod("Contains", new Type[] { typeof(string) }), right);
                    break;
                case "NOTLIKE":
                    InnerLambda = Expression.Not(Expression.Call(left, typeof(string).GetMethod("Contains", new Type[] { typeof(string) }), right));
                    break;
            }
            return InnerLambda;
        }



        static Expression<Func<T, object>> PropExpr<T>(string PropName)
        {
            ParameterExpression paramExpr = Expression.Parameter(typeof(T));
            var tempExpr = NestedExprProp(paramExpr, PropName);
            return Expression.Lambda<Func<T, object>>(Expression.Convert(Expression.Lambda(tempExpr, paramExpr).Body, typeof(object)), paramExpr);

        }






        static Expression<Func<T, TResult>> And<T, TResult>(this Expression<Func<T, TResult>> expr1, Expression<Func<T, TResult>> expr2)
        {
            var invokedExpr = Expression.Invoke(expr2, expr1.Parameters.Cast<Expression>());
            return Expression.Lambda<Func<T, TResult>>(Expression.AndAlso(expr1.Body, invokedExpr), expr1.Parameters);
        }





        static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> expr1, Expression<Func<T, bool>> expr2)
        {
            var invokedExpr = Expression.Invoke(expr2, expr1.Parameters.Cast<Expression>());
            return Expression.Lambda<Func<T, bool>>(Expression.OrElse(expr1.Body, invokedExpr), expr1.Parameters);
        }
    }



    // 09/15/2019 12:58 am - SSN - [20190914-0227] - [010] - Creating dynamic process to process data in the catch block

    public class ExpressionBuilderResults_SSN<T>
    {
        public bool ConditionIsTrueForTheCurrentRecord { get; set; }
        public bool ConditionIsTrueForTheTable { get; set; }
        public Expression<Func<T, bool>> func { get; set; }
    }




}



