import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class RestService {
  mi_lista_subject=new Subject<string[]>();
  productos_en_el_carrito:string[]=[];

  que_es="";

  current_config="manzana";

  constructor() {}
  add_to_mi_lista(producto:string){
      //ingresamos un nuevo producto añadido por el cliente
      this.productos_en_el_carrito.push(producto);
      this.mi_lista_subject.next(this.productos_en_el_carrito);
  }
  Return_lista_subject():Observable<string[]>{
    return this.mi_lista_subject;
  }
  ReturnCurrentConfig(){
    return this.current_config;
  } 
  ChangeCurrentConfig(new_config:string){
        this.current_config=new_config;
        console.log(this.current_config);
  }

  
}
