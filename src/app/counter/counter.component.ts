import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  longitud_lista:any;
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    if(this.rest.pagina_cliente_esta==='payout'){
      this.longitud_lista=this.rest.productos_anadidos_al_carrito.length;
    }else if(this.rest.pagina_cliente_esta==='productos'){
      this.rest.Return_lista_subject().subscribe(lista=>{
        this.longitud_lista=lista.length;
      });
    }
  }

}
