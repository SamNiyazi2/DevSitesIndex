export interface IJob_LineitemJS {
    lineItemId?: number;
    jobId: number | any;
    job: {
        jobTitle: string;
        project: {
            projectTitle: string;
        };
    };
    lineItem?: string;
}
