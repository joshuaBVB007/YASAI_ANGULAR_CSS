import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app} from '../log-in/log-in.component';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})

export class PayoutComponent implements OnInit {


  userActive:any=getAuth().currentUser;
  lista_op:any[]=[];

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.service.que_es="payout";
    this.lista_op=this.service.productos_en_el_carrito;
    console.log(this.lista_op);
  }

  InsertPayment(){
    console.log("Ha entrado en Prueba")
    const db = getDatabase(app);
    console.log(this.userActive)
    // dolores es el json principal y 2 en este caso es su hijo 
    set(ref(db, 'compras/'+"EGHBWld0frVXeUFeg85pEHjBMCh2"+"/"+"compra_Del_dia:"+new Date().toLocaleTimeString()+":"+new Date().getUTCFullYear()), {
      productos: "mongolitolito",
      lista:this.lista_op,
    });
  }

}
