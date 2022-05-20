// 05/02/2022 03:29 pm - SSN - [20220502-1159] - [006] - Create table DevSite_Job_LineItem

//const console__log = (msg, format) => console.log(msg, format);
//const console__dir = (obj1) => console.dir(obj1);

const console__log = (msg, format) => { };
const console__dir = (obj1) => { };

export async function handleResponse(response) {
    console__log('%c ' + 'DevSiteIndex ApiUrl - 20220502-1732-A', 'color:yellow;font-size:12pt');

    const responseClone = response.clone();
     

    if (response.ok) {

        console__log('%c ' + 'DevSiteIndex ApiUrl - 20220502-1732-CCCCCCCCCC', 'color:yellow;font-size:12pt');
        console__dir(response);
        try {
            const responseJSON = await response.json();
             
            console__dir(responseJSON);

            return responseJSON;

        } catch (e) {

            console__log('%c ' + 'DevSiteIndex ApiUrl - 20220512-1154 - Failed try ', 'color:red;font-size:36pt');
            console__dir(e);
            return responseClone.text().then(async responseClone => {
                console__log('%c ' + 'DevSiteIndex ApiUrl - 20220512-1154 - response clone text', 'color:red;font-size:36pt');
                console__dir(responseClone);
                return { ErrorMessage: 'Failed ApiUtil - 20220512-1217', e };

            }).catch(async responseCloneError => {
                console__log('%c ' + 'DevSiteIndex ApiUrl - 20220512-1201 - response clone text catch', 'color:brown;font-size:36pt');
                console__dir(responseCloneError);
                return { ErrorMessage: 'Failed ApiUtil - 20220512-1218', e };

            })

        }
          
    }

     

    console__log('%c ' + 'DevSiteIndex ApiUrl - 20220502-1732-D', 'color:yellow;font-size:18pt');

    if (response.status === 400) {

        console__log('%c ' + 'DevSiteIndex ApiUrl - 20220502-1732-E', 'color:yellow;font-size:18pt');

        const error = await response.text();
        throw new Error(error);

    }








    console__log('%c ' + 'DevSiteIndex ApiUrl - 20220502-1732-F', 'color:yellow;font-size:18pt');

    throw new Error("DevSiteIndex-React-20220502-1529 - Network response was not ok.");



}





// In a real app, would likely call an error logging service.
export function handleError(callSource, error) {
    // eslint-disable-next-line no-console
    console__log('%c ' + `DevSiteIndex-React-20220502-1530 - API call failed. callSource [${callSource}]`, 'color:red;font-size:14pt;');
    console__dir(error);
    throw error;
}
