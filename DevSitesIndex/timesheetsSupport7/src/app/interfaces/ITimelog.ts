
// 10/07/2019 09:14 am - SSN - [20191007-0914] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations


export interface ITimelog {
   
  timeLogId: number,
  dateAdded: Date,
  dateModified?: Date,
  disciplineID: number,
  jobId: number,
  startTime: Date,
  totalSeconds?: number,
  workDetail?: string,

  job?: {
    jobTitle: string
    project?: {
      projectTitle:string
    }
  }

}
