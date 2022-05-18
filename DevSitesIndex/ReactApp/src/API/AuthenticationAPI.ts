
// 05/02/2022 05:15 pm - SSN - [20220502-1159] - [011] - Create table DevSite_Job_LineItem


import { IUser } from "../Interfaces/IUser";
import { handleResponse, handleError } from "./ApiUtil";

// let api_url = "http://p3013.nonbs.org:3013"; //process.env.API_URL;
let api_url = ""; //process.env.API_URL;

const baseUrl = api_url + "/api/authenticateUserAPI/";

export class AuthenticationAPI {

    static async isLoggedIn_v02(): Promise<boolean> {
 
        console.log('%c ' + 'AuthenticationAPI-20220502-2048-ZZZZZZZZZZz', 'color:yellow;font-size:18pt;');


        return await fetch(baseUrl + "isLoggedIn")

            .then(async (res) => {

                console.log('%c ' + 'AuthenticationAPI-20220502-1827-GGGGGGGGGGGGG', 'color:yellow;font-size:18pt;');
                console.dir(res);

                const isLoggedIn_local: boolean = await handleResponse(res).then(async data => {

                    console.log('%c ' + 'AuthenticationAPI-20220502-1759-A', 'color:yellow;font-size:18pt;');
                    console.log('%c ' + 'AuthenticationAPI-20220502-1759-BBBBBBB', 'color:yellow;font-size:18pt;');
                    console.dir(data);
                    return data.isAuthenticated;

                });

                return isLoggedIn_local;
            })

            //  .then(await handleResponse)



            .catch(async (error) => { await handleError('AuthenticationAPI-20220502-1820-D', error); return false; }) as boolean;


    }


    // 05/13/2022 01:22 pm - SSN
    static async getForgeryToken(callSource: string) {

 
        return await fetch(baseUrl + 'ForgeryToken').then(async response => {
 
            const result = await response.text();
 
            return result;

        })
            .catch(error => {

                console.log('%c ' + 'AuthenticationAPI- getForgeryToken - 20220513-1314-C catch ', 'font-size:36pt;color:RED');
                console.dir(error);
                return null;
            });

    }


    // 05/13/2022 11:55 am - SSN - Copied from Angular 7 data.service.cs
    static async authenticateUser(callSource: string, userObject: IUser) {

      
        const headers = {
            'RequestVerificationToken': userObject.forgeryToken,
            'X-XSRF-Token': userObject.forgeryToken,
            'content-type': 'application/json'
        }

 

        return await fetch(baseUrl,
            {
                method: 'post',
                body: JSON.stringify(userObject),
                headers: headers
            })
            .then(handleResponse)
            .catch(error => handleError(callSource, error));

    }

}


