using DevSitesIndex.Entities;
using Microsoft.EntityFrameworkCore;
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


        public static Expression<Func<T, bool>> CreateExpression<T>(DbSet<T> entityx,  T record,  string andOrOperator, string propName, string opr, string value, Expression<Func<T, bool>> expr = null) where T :class
        {

            // Expression<Func<T, bool>> result = ToExpression<T>(andOrOperator, propName, opr, value, expr);
            TempDTO<T> result_dto = ToExpression<T>(andOrOperator, propName, opr, value, expr);

            var test1 = result_dto.func.Compile();
            bool test2 = test1(record);


            IQueryable<T> queryableData = entityx;

            MethodCallExpression whereCallExpression = Expression.Call(
             typeof(Queryable),
             "Where",
             new Type[] { queryableData.ElementType },
             queryableData.Expression,
            // Expression.Lambda<Func<bool>>(result_dto.binExpr, new ParameterExpression[] { pe }));
            result_dto.func);

            IQueryable<T> results = queryableData.Provider.CreateQuery<T>(whereCallExpression);

            // Enumerate the results.  
            foreach (T company in results)
                Console.WriteLine(company);

            return result_dto.func;

        }

        class TempDTO<T>
        {
            public Expression<Func<T, bool>>  func  { get; set; }
            public Expression binExpr { get; set; }
            
        }

        private static TempDTO<T> ToExpression<T>(string andOrOperator, string propName, string opr, string value, Expression<Func<T, bool>> expr = null)
        {

            SSN_Logger logger = (SSN_Logger)GetMeSomeServiceLocator.Instance.GetService(typeof(SSN_Logger));

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






        private static Expression ToExprConstant(Type prop, string value)
        {
            if (value.IsNull())
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
}



