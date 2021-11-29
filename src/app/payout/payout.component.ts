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

  list=[
    {nom:"manolo",precio:1.2},
    {nom:"cereza",precio:1.2},
    {nom:"jabon",precio:1.2},
  ]

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.service.que_es="payout";
    this.lista_op=this.service.productos_en_el_carrito;
  }

}
