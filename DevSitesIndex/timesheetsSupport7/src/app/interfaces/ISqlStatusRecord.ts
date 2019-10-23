// 10/21/2019 09:52 pm - SSN - [20191021-2033] - [003] - Revise timelog search returned result

export interface ISqlStatsRecord {

  recordsPerPage: number;
  currentPageNo: number;
  totalRecordCount: number;
  columnName: string;
  columnNameSelected: string;
  desc: boolean;

}

