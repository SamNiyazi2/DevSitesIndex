
// 05/02/2022 03:47 pm - SSN - [20220502-1159] - [008] - Create table DevSite_Job_LineItem

import { IDevSite_Job_LineItem } from "../Interfaces/IDevSite_Job_LineItem";

export class DevSite_Job_LineItem implements IDevSite_Job_LineItem {

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