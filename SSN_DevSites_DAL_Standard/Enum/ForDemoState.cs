using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace DevSitesIndex
{
    public class EnumList
    {

        // 03/19/2019 1-:04 pm - SSN - [20190319-2117] Added ForDemo_v02
        public enum ForDemoState
        {
            [Description("For Demo")]
            ForDemo = 1,

            [Description("Not For Demo")]
            NotForDemo = 2,

            [Description("Undecided")]
            Undecided = 3
        }
    }
}
