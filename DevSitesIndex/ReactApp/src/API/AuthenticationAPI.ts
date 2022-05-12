
// 05/02/2022 05:15 pm - SSN - [20220502-1159] - [011] - Create table DevSite_Job_LineItem


import { handleResponse, handleError } from "./ApiUtil";

// let api_url = "http://p3013.nonbs.org:3013"; //process.env.API_URL;
let api_url = ""; //process.env.API_URL;

const baseUrl = api_url + "/api/authenticateUserAPI/";

export async function isLoggedIn_v02(): Promise<boolean> {

    //{

    //    method: "get",
    //        headers: { "content-type": "application/json" }
    //}

    console.log('%c ' + 'AuthenticationAPI-20220502-2048-ZZZZZZZZZZz', 'color:yellow;font-size:18pt;');


    return await fetch(baseUrl + "isLoggedIn")

        .then(async (res) => {

            console.log('%c ' + 'AuthenticationAPI-20220502-1827-GGGGGGGGGGGGG', 'color:yellow;font-size:18pt;');
            console.dir(res);

            const isLoggedIn_local:boolean = await handleResponse(res).then(async data => {

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
