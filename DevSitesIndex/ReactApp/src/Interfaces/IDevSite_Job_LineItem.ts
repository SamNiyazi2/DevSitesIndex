
// 05/02/2022 03:40 pm - SSN - [20220502-1159] - [007] - Create table DevSite_Job_LineItem

 
export interface IDevSite_Job_LineItem {
    id: number;
    devSiteId: number;
    job_LineItemId: number;
    fK_UserID: number;
    dateAdded: Date;
    job_Lineitem: {
        job: {
            jobId: number;
            jobTitle: string;
        }
    } 
 
}