
// 05/02/2022 04:53 pm - SSN - [20220502-1159] - [010] - Create table DevSite_Job_LineItem

import { IGeneral_Error_Message } from "./General_Error_Message";


export interface IReactErrorModel {
    projectId?: string,
    jobId?: string,
    job_LineItemId?: string,
    general_Error?: IGeneral_Error_Message[],
    general_Error_Html?: string | JSX.Element | JSX.Element[]
}
