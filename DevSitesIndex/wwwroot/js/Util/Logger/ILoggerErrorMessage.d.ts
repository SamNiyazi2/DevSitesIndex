export interface ILoggerMessage {
    callSource: string;
    message: string;
}
export interface ILoggerErrorMessage {
    callSource: string;
    message: string;
    errorObject?: Error;
}
export interface ILoggerModule {
    cl_normal(msg: ILoggerMessage, color: string, load?: boolean): void;
    cl_error(msg: ILoggerErrorMessage): any;
}
