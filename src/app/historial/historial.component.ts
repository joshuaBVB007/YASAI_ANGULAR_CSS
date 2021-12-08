import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';
import { app } from '../log-in/log-in.component';    

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {

  userActive:any=getAuth().currentUser;
  historial_de_compras_usuario:any=[];

  constructor() { }

  ngOnInit(): void {
    // accedmos a la bbdd en la nube de firebase
    const db = getDatabase(app);
    // accedemos al nodo de esa bbdd 
    const nodo = ref(db, 'compras/' +"EGHBWld0frVXeUFeg85pEHjBMCh2");
     //this.userActive.uid
    onValue(nodo, (snapshot) => {
      // recuperamos los hijos de ese nodo
      const data = snapshot.val();
      //imprime las lista bajadas de firebase
      console.log(data)
      this.getHistory(data);
    });
  }
  
  async getHistory(historial:any){
      var i:any=Object.values(historial);
      var iterador=0;
      for (const key in historial) {
        this.historial_de_compras_usuario.push(i[iterador].productos);
        console.log("el valor:"+i[iterador].productos);
        console.log(i[iterador].lista);
        iterador++;
      }
  }

}
