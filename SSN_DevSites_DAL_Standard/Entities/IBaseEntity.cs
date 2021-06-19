using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 04/08/2019 01:12 am - SSN - [20190407-2345] - TimeLog

namespace DevSitesIndex.Entities
{
    public interface IBaseEntity
    {
        // 09/27/2019 03:20 pm - SSN - [20190927-0634] - [1001] - Testing

        DateTime DateAdded { get; set; }
        DateTime? DateModified { get; set; }
    }


    // 09/28/2019 12:56 pm - SSN - [20190928-1256] - [001] - Adding Entity Framework model attribute 

    namespace EFCoreShadowProperty.Models
    {
        [AttributeUsage(AttributeTargets.Property)]
        public class DateAddedAttribute : Attribute
        {
        }

        [AttributeUsage(AttributeTargets.Property)]
        public class DateUpdatedAttribute : Attribute
        {
        }

        // 06/16/2021 04:14 am - SSN - [20210613-0452] - [101] - Adding tags to DevSite
        // Added to allow for relation tables with no DateModifid field.
        [AttributeUsage(AttributeTargets.Property)]
        public class NoDateUpdatedAttribute : Attribute
        {
        }
    }

}
