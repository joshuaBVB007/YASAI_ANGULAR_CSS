import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(lista: string[],objeto:object[], texto: string): any {
    let user = lista.find(item => item);
    return lista;
  }
}
