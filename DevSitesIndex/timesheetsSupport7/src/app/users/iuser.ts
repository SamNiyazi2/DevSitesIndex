
// 10/07/2019 10:24 am - SSN - [20191007-1020] - [002] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user

export interface IUser {

  email: string,
  password?: string,  // So we can pass back null from API.
  firstName?: string,
  lastName?: string,
  isAuthenticated?: boolean,
  forgeryToken?:string

}
