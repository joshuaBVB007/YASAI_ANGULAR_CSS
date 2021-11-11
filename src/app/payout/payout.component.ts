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
    this.lista_op=this.route.snapshot.params['prueba'];
    console.log("esto "+this.lista_op);
    for (let index = 0; index < this.lista_op.length; index++) {
      const element = this.lista_op[index];
      console.log(element)
    }
  }

}
