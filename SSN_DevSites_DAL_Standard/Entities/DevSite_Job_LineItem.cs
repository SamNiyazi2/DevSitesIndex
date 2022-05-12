using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

// 05/02/2022 11:59 am - SSN - [20220502-1159] - [001] - Create table DevSite_Job_LineItem

namespace DevSitesIndex.Entities
{
    public class DevSite_Job_LineItem
    {
        public DevSite_Job_LineItem()
        {
            DevSite = new DevSite();
            Job_Lineitem = new Job_Lineitem();
            AspNetUser = new AspNetUsers();
        }


        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [Required]
        public int DevSiteId { get; set; }


        [Required]
        public int Job_LineItemId { get; set; }


        [EFCoreShadowProperty.Models.NoDateUpdated]
        [EFCoreShadowProperty.Models.DateAdded]
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        [Required]
        public DateTime DateAdded { get; set; }

        public virtual DevSite DevSite { get; set; }

        public virtual Job_Lineitem Job_Lineitem { get; set; }



        [Required]
        public int FK_UserID { get; set; }

        
        public virtual AspNetUsers AspNetUser { get; set; }
    }
}
