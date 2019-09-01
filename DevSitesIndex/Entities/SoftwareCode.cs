using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Globalization;

// 08/24/2018 12:48 am - SSN - Moved from Entities\devsite.cs

namespace DevSitesIndex.Entities
{
    public class SoftwareCode
    {

        public int ID { get; set; }

        [DisplayName("Software")]
        public string SoftwareTitle { get; set; }
    }

    //public class SoftwareCodeModel
    //{

    //    public enum SoftwareCode
    //    {
    //        // 08/24/2018 12:43 am - SSN - Added description
    //        [Description("Visual Studio")]
    //        VS = 1,
    //        [Description("Visual Studio Code")]
    //        VSC = 2 // 08/24/2018 12:40 am - SSN
    //    }

    //}


    // http://wmwood.net/2015/12/18/quick-tip-enum-to-description-in-csharp/
    public static class EnumExtensions
    {
        public static string getDescription<T>(this T enumValue) where T : struct
        {
            Type type = enumValue.GetType();
            if ( !type.IsEnum)
            {
                string nameOfEnumValue = nameof(enumValue);
                throw new ArgumentException($"{nameOfEnumValue} must be of Enum type.",nameof(enumValue));
            }

            var memberInfo = type.GetMember(enumValue.ToString());

            if (memberInfo.Length > 0)
            {
                var attrs = memberInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);
                if ( attrs.Length > 0)
                {
                    return ((DescriptionAttribute)attrs[0]).Description;
                }
            }

            return enumValue.ToString();
        }


        // https://stackoverflow.com/questions/105372/how-do-i-enumerate-an-enum
        #region





        //Added
        public static IEnumerable<string> GetAllItemsDescription<T>(this Enum value) where T : struct
        {
            foreach (object item in Enum.GetValues(typeof(T)))
            {
                var description =  ((T)item).getDescription();
                yield return description;


            }
        }




        public static IEnumerable<T> GetAllSelectedItems<T>(this Enum value)
        {
            int valueAsInt = Convert.ToInt32(value, CultureInfo.InvariantCulture);

            foreach (object item in Enum.GetValues(typeof(T)))
            {
                int itemAsInt = Convert.ToInt32(item, CultureInfo.InvariantCulture);

                if (itemAsInt == (valueAsInt & itemAsInt))
                {
                    yield return (T)item;
                }
            }
        }







        public static IEnumerable<T> GetAllItems<T>(this Enum value)
        {
            foreach (object item in Enum.GetValues(typeof(T)))
            {
                yield return (T)item;
            }
        }



        public static IEnumerable<T> GetAllItems<T>() where T : struct
        {
            foreach (object item in Enum.GetValues(typeof(T)))
            {
                yield return (T)item;
            }
        }


        #endregion

    }
}
