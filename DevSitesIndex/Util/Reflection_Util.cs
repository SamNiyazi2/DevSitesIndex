using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;

// 08/28/2019 04:20 am - SSN - Refactor

namespace DevSitesIndex.Util
{

    public static class Reflection_Util
    {


        // 08/26/2019 04:19 pm - SSN - [20190826-1619] - [001] - Add sort

        // https://stackoverflow.com/questions/34906437/how-to-construct-order-by-expression-dynamically-in-entity-framework
        public static bool PropertyExists<T>(string propertyName)
        {
            if (string.IsNullOrEmpty(propertyName)) return false;
            return typeof(T).GetProperty(propertyName, BindingFlags.IgnoreCase |
              BindingFlags.Public | BindingFlags.Instance) != null;
        }


        public static IQueryable<T> SourceSetOrder<T>(IQueryable<T> query, string sortColumn, bool desc)
        {

            string sortMethodName = (desc ? "OrderByDescending" : "OrderBy");

            var property = typeof(T).GetProperty(sortColumn);
            var parameter = Expression.Parameter(typeof(T), "p");
            var propertyAccess = Expression.MakeMemberAccess(parameter, property);
            var orderByExpression = Expression.Lambda(propertyAccess, parameter);

            Expression resultExpression = Expression.Call(typeof(Queryable), sortMethodName, new Type[] { typeof(T), property.PropertyType },
               query.Expression, Expression.Quote(orderByExpression));

            return query.Provider.CreateQuery<T>(resultExpression);
        }


        //    public static Expression<Func<T, string>> GetPropertyExpression<T>(string propertyName)
        public static IQueryable<T> SourceSetOrder_v01<T>(IQueryable<T> source, string propertyName, bool desc)
        {
            PropertyInfo pi = typeof(T).GetProperty(propertyName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

            if (pi == null) return null;


            var paramterExpression = Expression.Parameter(typeof(T));

            //return (Expression<Func<T, string>>)Expression.Lambda(
            //    Expression.PropertyOrField(paramterExpression, propertyName), paramterExpression);

            string sortMethodName = (desc ? "OrderByDescending" : "OrderBy");

            List<MethodInfo> OrderByMethod_yyy = typeof(Queryable).GetMethods().Where(method =>
                               method.Name == sortMethodName).ToList();


            MethodInfo OrderByMethod_XXX = typeof(Queryable).GetMethods().Single(method =>
                                    method.Name == sortMethodName && method.GetParameters().Length == 2);


            //ParameterExpression paramterExpression = Expression.Parameter(typeof(T));
            Expression orderByProperty = Expression.Property(paramterExpression, propertyName);
            LambdaExpression lambda = Expression.Lambda(orderByProperty, paramterExpression);
            MethodInfo genericMethod = OrderByMethod_XXX.MakeGenericMethod(typeof(T), orderByProperty.Type);


            Console.WriteLine(string.Format("20190830-1048 [{0}]", lambda.Body));


            object ret = genericMethod.Invoke(null, new object[] { source, lambda });
            return (IQueryable<T>)ret;

        }


    }
}
