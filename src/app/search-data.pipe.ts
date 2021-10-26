import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class SearchDataPipe implements PipeTransform {

  transform(lista:any, ...args: any): any {
    return null;
  }

}
