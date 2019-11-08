import { IDataBag } from './IDataBag';

// 11/07/2019 06:34 pm - SSN - [20191107-1213] - [014] - Login -  Test run after working with newly added register option

export interface IAuthResult_v02 {

  isAuthenticated: boolean;
  email: string;
  firstName: string;

  lastName: string;

 dataBag: IDataBag

}
