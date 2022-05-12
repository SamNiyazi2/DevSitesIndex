
// 05/02/2022 04:53 pm - SSN - [20220502-1159] - [010] - Create table DevSite_Job_LineItem

import { IReactErrorModel } from "../Interfaces/IReactErrorModel";

export class ReactErrorModel implements IReactErrorModel {
    projectId?: string;
    jobId?: string;
    job_LineItemId?: string;
    general_Error?: string;
    general_Error_Html?: string | JSX.Element | JSX.Element[];
}