
// 05/13/2022 12:16 pm - SSN 

import { IUser } from "../Interfaces/IUser";

export class User implements IUser {

    email: string;
    password ?: string;  // So we can pass back null from API.
    firstName ?: string;
    lastName ?: string;
    isAuthenticated ?: boolean;
    forgeryToken ?: string;

}
