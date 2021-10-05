import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title='Doggy life';
  f=new Date(Date.now());
  anio=this.f.getUTCFullYear();
  mes=this.f.getUTCMonth();
  dia=this.f.getDate();

  lista=["a","b","c"];
  
  constructor(){
    this.lista.forEach(function(a){
      console.log(a);
    });
  }  
}


