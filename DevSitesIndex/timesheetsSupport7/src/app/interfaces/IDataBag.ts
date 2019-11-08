import { ISqlStatsRecord } from "./ISqlStatusRecord";

// 11/05/2019 06:32 pm - SSN - [20191104-0607] - [013] - Registration - Client 

export interface IDataBag {

  dataList: any;
  hasErrors: boolean;

  feedbackMessages: [{
    key: string,
    errorMessages: []
  }];

  pageContent: {
    messageTitle_AsString: string,
    messageBody_AsString: string
  }
  sqlStatsRecord: ISqlStatsRecord;

}
