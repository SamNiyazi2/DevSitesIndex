export default interface IColumnBag {
    recordsPerPage: number;
    currentPageNo: number;
    totalRecordCount: number;
    columnName: string;
    columnNameSelected: string;
    desc: boolean;
    caption: string;
    job_statuses_selected: number[];
    fk_filter: number;
}
