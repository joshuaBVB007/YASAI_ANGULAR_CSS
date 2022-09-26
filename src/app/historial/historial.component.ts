import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';
import { app } from '../log-in/log-in.component';   
import { RestService } from '../rest.service';


class CustomerPurchases{
    fecha:string="";
    lista:string="";
    constructor(fecha:string,lista:string){
        this.fecha=fecha;
        this.lista=lista;
    }
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {

  userFirebaseOnSessionReceiver:any;
  listas_del_historial:any=[];
  historial_de_compras_usuario:any=[];

  constructor(private service:RestService) { }
  ngOnInit(): void {
    // accedmos a la bbdd en la nube de firebase
    const db = getDatabase(app);
    // accedemos al nodo de esa bbdd 
    console.log(this.userFirebaseOnSessionReceiver);
    const nodo = ref(db, 'Compras_de_los_usuarios/' +this.userFirebaseOnSessionReceiver.uid.toString());
     //this.userActive.uid
    onValue(nodo, (snapshot) => {
      // recuperamos los hijos de ese nodo
      const data = snapshot.val();
      this.getHistory(data);
    });
  }
  async getHistory(historial:any){
      var i:any=Object.values(historial);
      var iterador=0;
      for (const key in historial) {
        this.getChances(i[iterador].lista,i[iterador].fecha);
        iterador++;
      }
  }

  async getChances(objeto:any,fecha:any){
    var internet:any=Object.values(objeto);
    var iterados_dos=0;
    var listita:any=[];
    for (const key in internet) {
          listita.push(internet[iterados_dos].nombre)
          console.log(internet[iterados_dos].nombre);
          iterados_dos++;
    }
    // this.listas_del_historial.push(listita.toString());
    // this.historial_de_compras_usuario.push(fecha);
    this.historial_de_compras_usuario.push(new CustomerPurchases(fecha,listita.toString()))
    listita=[];
  }

}
