
// 10/09/2019 10:58 pm - SSN - [20191009-2256] - [001] - M10 - Displaying data with pipes.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobStatus'
})
export class JobStatusPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {

      case 1:
        return '*Open';

      case 2:
        return '*Pending';

      case 3:
        return '*Completed';

      case 4:
        return '*Canceled';

    }
    return "Invalid status code [" + value + "]";

  }

}
