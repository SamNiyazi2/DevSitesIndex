
// 10/04/2019 11:25 pm - SSN - [20191003-1557] - [013] - Adding data service to Angular7
// 10/10/2019 11:39 pm - SSN - [20191010-1354] - [001] - M11 - Understanding Angular's Dependency Injection

import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toast');

export interface Toastr {

  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;

}
