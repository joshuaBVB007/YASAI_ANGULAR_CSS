import { Component, OnInit } from '@angular/core';
import { getDatabase,ref,onValue, child } from 'firebase/database';
import { app } from '../log-in/log-in.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const db = getDatabase(app);
    const nodo = ref(db, 'Productos/'+"Frutas/");

    onValue(nodo, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      for (const key in data) {
        // var lista=Object.values(key);
        var lista=key;
        console.log(lista) 
      }
    });


  }

}


