import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FirebaseObject } from './productos/productos.component';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  mi_lista_subject=new Subject<FirebaseObject[]>();
  //esta propiedad esta siendo trabajada en payout
  productos_en_el_carrito:any[]=[];

  que_es="";
  current_config="manzana";

  constructor() {}
  add_to_mi_lista(producto:FirebaseObject){
      //ingresamos un nuevo producto añadido por el cliente
      this.productos_en_el_carrito.push(producto);
      this.mi_lista_subject.next(this.productos_en_el_carrito);
  }
  delete_A_product_from_list(indice:number){
    this.productos_en_el_carrito.splice(indice,1);
    this.mi_lista_subject.next(this.productos_en_el_carrito);
  }
  Return_lista_subject():Observable<FirebaseObject[]>{
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
