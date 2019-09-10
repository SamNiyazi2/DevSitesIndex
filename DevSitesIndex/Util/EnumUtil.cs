using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

// 03/20/2019 03:05 am - SSN

namespace DevSitesIndex.Util
{
    public static class EnumUtil
    {
         
        // Source: https://stackoverflow.com/questions/4367723/get-enum-from-description-attribute
        #region Description related

        public static string GetDescription(this Enum value)
        {
            FieldInfo field = value.GetType().GetField(value.ToString());

            DescriptionAttribute attribute
                    = Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute))
                        as DescriptionAttribute;

            return attribute == null ? value.ToString() : attribute.Description;
        }

        public static T GetValueFromDescription<T>(string description)
        {
            var type = typeof(T);

            if (!type.IsEnum) throw new InvalidOperationException(string.Format("DemoSite-20190320-0308 [{0}] is not of type Enum.", description));

            foreach (var field in type.GetFields())
            {
                var attribute = Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) as DescriptionAttribute;

                if (attribute != null)
                {
                    if (attribute.Description == description)
                        return (T)field.GetValue(null);
                }
                else
                {
                    if (field.Name == description)
                        return (T)field.GetValue(null);
                }
            }
            throw new ArgumentException(string.Format("DemoSite-20190320-0309 - Enum not found in Enum .[{0}]", type.FullName), "description");
            // or return default(T);
        }

        #endregion Description related

    }
}
