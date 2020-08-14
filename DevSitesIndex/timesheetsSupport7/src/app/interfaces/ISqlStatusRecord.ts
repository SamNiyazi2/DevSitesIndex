// 10/21/2019 09:52 pm - SSN - [20191021-2033] - [003] - Revise timelog search returned result

export interface ISqlStatsRecord {

  searchTerm?:string, // 11/01/2019 10:18 am - SSN - [20191101-1018] Added
  recordsPerPage?: number;
  currentPageNo?: number;
  totalRecordCount?: number;
  columnName?: string;
  columnNameSelected?: string;
  desc?: boolean;

}

