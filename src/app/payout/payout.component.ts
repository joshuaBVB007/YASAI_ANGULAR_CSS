import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent implements OnInit {

  lista_op:string[]=[];

  constructor(private route:ActivatedRoute,private service:RestService) { }

  ngOnInit(): void {
    this.lista_op=this.service.productos_anadidos_al_carrito;
    this.service.pagina_cliente_esta="payout";
  }

}
