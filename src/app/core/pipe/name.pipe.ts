import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const returnStr = 'Hello, Name is: ' + value;
    return returnStr;
  }

}
