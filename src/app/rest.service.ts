import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  mi_lista_de_la_compra:string[]=[];
  mi_lista_subject=new Subject<string[]>();

  productos_anadidos_al_carrito:string[]=[];
  pagina_cliente_esta="productos";


  constructor() {}

  add_to_mi_lista(producto:string){
      //ingresamos un nuevo producto añadido por el cliente
      this.productos_anadidos_al_carrito.push(producto);
      this.mi_lista_de_la_compra.push(producto);
      //le notifico a traves del el metodo next los nuevos cambios en la lista
      this.mi_lista_subject.next(this.mi_lista_de_la_compra);
    }
  Return_lista_subject():Observable<string[]>{
    return this.mi_lista_subject;
  }
}
