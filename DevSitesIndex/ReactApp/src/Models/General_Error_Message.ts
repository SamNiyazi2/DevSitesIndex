
// 05/16/2022 02:16 pm - SSN 

import { IGeneral_Error_Message } from "../Interfaces/General_Error_Message";

export class General_Error_Message implements IGeneral_Error_Message {

    constructor(public ErrorMessage: string, public RequestLogin: boolean) {

    }

}