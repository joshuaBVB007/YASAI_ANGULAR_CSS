import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { __values } from 'tslib';
import { app} from '../log-in/log-in.component';
import { RestService } from '../rest.service';

class ProductoAPagar{
    nombre="";
    precio="";
    cantidad=0;
    url="";
    constructor(nombre:string,precio:string,cantidad:number,url:string){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.url=url;
    }
}


@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})

export class PayoutComponent implements OnInit {

  //usuario de firebase en activo
  userActive:any=getAuth().currentUser;

  //la lista que recibimos de la observable
  lista_op:any[]=[];
  //la lista que llenamos con los nuevos objetos
  lista_A_pagar:any[]=[];
  //Cantidad absoluta para pagar
  Total_A_Pagar:number=0;
  conversion:any;


  constructor(private service:RestService) { }

  ngOnInit(): void {
    
    this.service.que_es="payout";
    this.lista_op=this.service.productos_en_el_carrito;
    this.FillObject();
    console.log(this.lista_op);
  }

  SetQuantityOfProducts(indice:number,nombre:string,cantidad:string){
    console.log(indice,nombre,cantidad);
    this.lista_A_pagar[indice].cantidad=cantidad;
  }

  Confirm(){
    for (let index = 0; index < this.lista_A_pagar.length; index++) {
      const element = this.lista_A_pagar[index];
      var process_price=parseFloat(element.precio)
      var process_quantity=parseFloat(element.cantidad);
      var process_total=process_price*process_quantity;
      this.Total_A_Pagar+=process_total;
    }
  }

  FillObject(){
    for (let index = 0; index < this.lista_op.length; index++) {
      const nombre = this.lista_op[index].nombre;
      const price = this.lista_op[index].precio;
      const url = this.lista_op[index].url;
      this.lista_A_pagar.push(new ProductoAPagar(nombre,price,0,url));
    }
  }

  DeleteProduct(indice:number){
    console.log(indice);
    this.service.delete_A_product_from_list(indice);
  }

  InsertPayment(){
    console.log("Ha entrado en Prueba")
    const db = getDatabase(app);
    console.log(this.userActive)
    // dolores es el json principal y 2 en este caso es su hijo 
    set(ref(db, 'Compras_de_los_usuarios/'+"EGHBWld0frVXeUFeg85pEHjBMCh2"+"/"+"compra_Del_dia:"+new Date().toLocaleTimeString()+":"+new Date().getUTCFullYear()), {
      lista:this.lista_op,
      fecha:new Date().toLocaleTimeString()+":"+new Date().getUTCFullYear(),
    });
  }

}
