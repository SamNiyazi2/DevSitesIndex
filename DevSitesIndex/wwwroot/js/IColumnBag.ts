// 09/18/2019 03:20 am - SSN - [20190917-0929] - [015] - Adding paging for angular lists


export default interface IColumnBag {

    recordsPerPage: number,
    currentPageNo: number,
    totalRecordCount: number,
    columnName: string,
    columnNameSelected: string,
    desc: boolean,
    caption: string,
    job_statuses_selected: number[], //09/22/2019 08:21 am - SSN 
    fk_filter: number , // 11/27/2019 09:20 am - SSN
    cssForTableHead?: string // 06/10/2021 03:35 am
}


