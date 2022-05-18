// 05/13/2022 11:59 am - SSN - Copied from Angular 7

export interface IUser {

    email: string,
    password?: string,  // So we can pass back null from API.
    firstName?: string,
    lastName?: string,
    isAuthenticated?: boolean,
    forgeryToken?: string

}