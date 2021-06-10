
// 06/06/2021 09:41 pm - SSN - [20210606-0227] - [013] - Testng for deployment

export interface ILoggerMessage {

    callSource: string,
    message: string

}


export interface ILoggerErrorMessage {

    callSource: string,
    message: string,
    errorObject?: Error
}



export interface ILoggerModule {

    cl_normal(msg: ILoggerMessage, color: string, load?: boolean): void,
    cl_error(msg: ILoggerErrorMessage)

}