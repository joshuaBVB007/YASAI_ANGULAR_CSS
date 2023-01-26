import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';

class ProductoAPagar{
  nombre="";
  precio=0;
  cantidad=0;
  constructor(nombre:string,precio:number,cantidad:number){
      this.nombre=nombre;
      this.precio=precio;
      this.cantidad=cantidad;
  }
}

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})

export class PayoutComponent implements OnInit {
  // lista que hemos renderizado en la interfaz
  items_nearto_buy:any[]=[];
  //lista con los productos a vender
  valores:ProductoAPagar[]=[];
  total:number = 0;
  Quantity:number=0;
  @ViewChild("sourcetag") myNameElem: ElementRef | undefined;
  @ViewChild("error") myName: ElementRef | undefined;

  constructor(private service:RestService) { }
  
  ngOnInit(): void {
    this.service.que_es="payout";
    this.items_nearto_buy=this.service.productos_en_el_carrito;
  }

  add(nombre:any,precio:any,cantidad:any){
      let obj=new ProductoAPagar(nombre,parseInt(precio),parseInt(cantidad));
      console.log(obj)
      this.valores.push(obj);
  }

  Makesound(){
    console.log(this.myNameElem);
    let sound=this.myNameElem?.nativeElement;
    sound.play();
  }

  MakesoundEr(){
    console.log(this.myName);
    let soundEr=this.myName?.nativeElement;
    soundEr.play();
  }

  confirm(){
      let retorno=this.valores.map((value)=>{ return value.precio*value.cantidad });
      // retorno es la lista de valores que hemos añadido
      console.log(retorno)
      for(let i=0;i<retorno.length;i++){
        console.log(retorno[i])
        this.total=this.total+retorno[i];
      }
      this.valores=[];
      this.items_nearto_buy=[];
      this.service.productos_en_el_carrito=[];
      this.service.mi_lista_subject.next(this.service.productos_en_el_carrito)
  }
}
