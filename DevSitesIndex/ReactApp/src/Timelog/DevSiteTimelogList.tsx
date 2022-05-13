
// 05/11/2022 11:53 am - SSN - Creating 

import React, { useState, useEffect } from 'react';
import PropTypes, { array } from 'prop-types';
import parse from 'html-react-parser';

import '../css/ReactCSS.css';


//import { IDevSite_Job_LineItem } from '../interfaces/IDevSite_Job_LineItem';
//import { DevSite_Job_LineItem } from '../Models/DevSite_Job_LineItem';

import { deleteDevSiteTimelogRecord, getDevSiteTimelogRecords } from '../API/DevSite_Job_LineItemAPI';
import { DevSiteTimeLogDeleteOption } from './devSiteTimeLogDelete';

export const DevSiteTimelogList = (props) => {


    const [errors, setErrors] = useState([]);

    const [timelogData, setTimelogData] = useState([]);

    const [ reverseConfirmOption, setReverseConfirmOption] = useState(0);

    useEffect(() => {


        const data = getDevSiteTimelogRecords(props.devSiteId);
        console.log("%c " + "DevSiteTimeLogList - 20220511-1203", 'Color:yellow;font-size:20px;');
        console.dir(data);
        data.then(response => {

            console.log("%c " + "DevSiteTimeLogList - 20220511-1206", 'Color:green;font-size:20px;');
            console.dir(response);

            // Do we have an error?
            if (response.Message) {

                const _erros = new Array();
                _erros.push(response.Message);
                setErrors(_erros);
            } else {
                // Did we get our records back?
                if (response.length > 0 && response[0].devSiteId == props.devSiteId) {

                    //let arrayCopy: DevSite_Job_LineItem[] = response as DevSite_Job_LineItem[];

                    setTimelogData(response);

                    console.log("%c " + "DevSiteTimeLogList - 20220511-1329", 'Color:blue;font-size:32px;');
                    // console.dir(arrayCopy);
                    console.dir(timelogData);
                }
            }

        })
            .catch(error => {
                console.log("%c " + "DevSiteTimeLogList - 20220511-1208", 'Color:red;font-size:20px;');
                console.dir(error);

                const _erros = new Array();
                _erros.push(error.Message);
                setErrors(_erros);
            });


    }, [props.devSiteId, props.currentDate, timelogData.length]);



    const displayErrorMessages = () => {
        console.log("%c " + "DevSiteTimeLogList - 20220511-1229", 'Color:red;font-size:20px;');
        console.dir(errors);


        let results = errors.reduce((previous, currentValue, currentIndex) => previous + "<li class='alert alert-danger'>" + currentValue + "</li>", "");

        console.dir(results);
        if (results != "") {
            results = "<ul>" + results + "</ul>";
        }
        return parse(results);
    }


    

    return (
        <>

            {
                errors && displayErrorMessages()
            }
             
            <div className="cssTransitionDiv">
            <table >
                <tbody>
                    {
                        timelogData && timelogData.map((timelogRecord) => {

                            const jobDetailUrl = `/jobs/details/?id=${timelogRecord.job_Lineitem?.jobId}`;
                            const jobDetailWindowName = `jobDetailWindow${timelogRecord.job_Lineitem?.jobId}`;

                            return (
                                <tr key={timelogRecord.id}>

                                    <td >
                                        <>
                                            Timelog: <a href={jobDetailUrl} target={jobDetailWindowName} >{timelogRecord.job_Lineitem.job.jobTitle}</a>
                                            &nbsp;
                                            <DevSiteTimeLogDeleteOption
                                                devSite_Job_LineitemId={timelogRecord.id}
                                                reverseConfirmOption={reverseConfirmOption}
                                                setReverseConfirmOption={setReverseConfirmOption}
                                                setTimelogData={setTimelogData}
                                            />
                                           </>

                                    </td>
                                </tr>

                            );
                        })
                    }
                </tbody>
            </table>
            </div>

        </>
    )

}

DevSiteTimelogList.propTypes = {
    devSiteId: PropTypes.number.isRequired,
    currentDate: PropTypes.object.isRequired
};

