import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const limit = args && args[0] ? parseInt(args[0], 10) : 100;
    const trail = args && args[1] ? args[1] : '...';
    return value.length > limit ? `${value.substring(0, limit)}${trail}` : value;
  }

}
