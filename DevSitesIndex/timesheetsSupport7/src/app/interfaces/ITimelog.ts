
// 10/07/2019 09:14 am - SSN - [20191007-0914] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations


export interface ITimelog {

    timeLogId: number,
    dateAdded: Date,
    dateModified?: Date,
    disciplineID: number,

    // 10/28/2019 05:27 am - SSN - [20191028-0456] - [005] - Timesheet dashboard
    // ng build --aot=true - child route fix
    discipline?: { disciplineShort: string },

    jobId: number,
    startTime: Date,
    totalSeconds?: number,
    workDetail?: string,

    job?: {
        jobTitle: string

        // 10/28/2019 05:27 am - SSN - [20191028-0456] - [005] - Timesheet dashboard
        // ng build --aot=true - child route fix
        job_StatusID?: number,

        project?: {
            projectTitle: string
        }
    },

    job_Lineitem?: {
        lineItem: string
    }


}
