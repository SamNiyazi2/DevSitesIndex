
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

// 12/10/2020 06:18 am - SSN - [20201210-0618] - [001] - Adding Job_LineItems table


namespace DevSitesIndex.Entities
{
    public class Job_Lineitem : IBaseEntity
    {
        [Key]
        public int LineItemId { get; set; }

        [Display(Name = "Job Id")]
        public int JobId { get; set; }

        [Display(Name = "Job Title")]
        public Job job { get; set; }



        [Display(Name = "Line Item")]
        [Required]
        public string LineItem { get; set; }


        [EFCoreShadowProperty.Models.DateAdded]
        [Display(Name = "Date Added")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime DateAdded { get; set; }


        [EFCoreShadowProperty.Models.DateUpdated]
        [Display(Name = "Date Updated")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy hh:mm tt}")]
        public DateTime? DateModified { get; set; }


        [Timestamp]
        public byte[] RowVersion { get; set; }



        public virtual ICollection<TimeLog> timelogs { get; set; }

    }
}
