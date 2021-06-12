export interface ITimelogJS {
    timeLogId?: number;
    jobId: number;
    job: {
        jobTitle: string;
        project: {
            projectTitle: string;
        };
    };
}
