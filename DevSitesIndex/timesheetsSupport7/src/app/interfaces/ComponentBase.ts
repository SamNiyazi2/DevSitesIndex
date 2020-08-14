import { IDataBag } from './IDataBag';
import { GenUtilService } from '../shared/gen-util.service';
import * as ehu from '../util/ErrorHandlingHelpers';
import { Host } from '@angular/core';



// 11/04/2019 05:02 pm - SSN - [20191104-0607] - [008] - Registration - Client 

//
export interface IComponentBase {

   isDirty: boolean ;

   pageContent: {
    title: string,
    body: string
  }
 
}
