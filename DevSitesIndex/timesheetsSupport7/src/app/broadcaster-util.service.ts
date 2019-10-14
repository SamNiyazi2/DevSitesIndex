
// 10/11/2019 05:34 pm - SSN
// 10/11/2019 06:07 pm - SSN - [20191011-1804] - [003] - Adding broadcastutil


// https://blog.lacolaco.net/post/event-broadcasting-in-angular-2/

import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';


interface BroadcastEvent {

  key: any,
  data?: any

}


@Injectable({
  providedIn: 'root'
})
export class BroadcasterUtilService {

  private broadcastEvents: Subject<BroadcastEvent>;

  constructor() {
    this.broadcastEvents = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this.broadcastEvents.next({ key, data });

  }

  on<T>(key: any): Observable<T> {

    console.log('broadcastUtil - 20191011-1757');

    let result = this.broadcastEvents.asObservable().pipe(filter(event => event.key === key)).pipe(map(event => <T>event.data));

    console.log(result);
    console.log('------------------------------');
    return result;

  }



}
