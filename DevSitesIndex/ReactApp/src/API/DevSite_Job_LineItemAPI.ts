// 05/02/2022 03:27 pm - SSN - [20220502-1159] - [005] - Create table DevSite_Job_LineItem

import { IDevSite_Job_LineItem } from "../Interfaces/IDevSite_Job_LineItem";
import { handleResponse, handleError } from "./ApiUtil";

let api_url = ""; //process.env.API_URL;


const baseUrl = api_url + "/API/DevSite_Job_LineItemAPI/";

//export function getCourses() {
//    return fetch(baseUrl)
//        .then(handleResponse)
//        .catch(handleError);
//}

export async function saveRecord(devSite_Job_LineItem: IDevSite_Job_LineItem) {

    return await fetch(baseUrl + (devSite_Job_LineItem.id || ""), {
        method: devSite_Job_LineItem.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(devSite_Job_LineItem)
    })
        //.then(response => response.json())
        .then(await handleResponse)
        .catch(async (error) => await handleError('DevSite_job_LineItemAPI-20220502-2050', error));

}

// 05/11/2022 12:01 pm - SSN - Adding
export async function getDevSiteTimelogRecords(devSiteId:number) {

    return await fetch(baseUrl + "TimelogRecords/" +  devSiteId , {
        method: "GET" ,  
        headers: { "content-type": "application/json" }
    })
        .then(await handleResponse)
        .catch(async (error) => await handleError('DevSite_job_LineItemAPI-20220511-1202', error));

}


export async function deleteDevSiteTimelogRecord(id: number) {

    return await fetch(baseUrl + "TimelogRecords/" + id, {
        method: "delete",
        headers: { "content-type": "application/json" }
    })
        .then(await handleResponse)
        .catch(async (error) => await handleError('DevSite_job_LineItemAPI-delete-20220511-1625', error));

}



