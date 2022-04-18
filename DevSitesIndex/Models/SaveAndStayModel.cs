
// 09/04/2020 05:45 am - SSN - [20200904-0540] - [003] - Ading save-and-stay option to codereference

namespace DevSitesIndex.Models
{
    public class SaveAndStayModel
    {
        public string ko__inputFormId { get; set; }
        public string ko__fieldName_prefix { get; set; }
        public string ko__API_URL { get; set; }

        // 04/18/2022 07:42 am - SSN - RowVersion_FieldName
        public string ko__RowVersion_FieldName { get; set; }

    }
}
