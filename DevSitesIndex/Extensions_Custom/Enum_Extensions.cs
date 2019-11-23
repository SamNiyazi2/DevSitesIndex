using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 11/22/2019 06:24 pm - SSN - [20191121-0503] - [020] - Timelog edit options on project search

namespace System
{
    public static class Enum_Extensions
    {

        public static Enum getEnum<T>(this Enum _this, string value)
        {
            object result = default(T);

            Enum.TryParse(typeof(T), value, out result);

            return result as Enum;

        }


        // 11/22/2019 06:52 pm - SSN - [20191121-0503] - [021] - Timelog edit options on project search

        public static TEnum parseEnum<TEnum>(object value) where TEnum : struct
        {

            Enum.TryParse<TEnum>(value.ToString(), out TEnum result);

            return result;

        }

    }



}
