import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title='Natural life';
  f=new Date(Date.now());
  anio=this.f.getUTCFullYear();
  mes=this.f.getUTCMonth();
  dia=this.f.getDate();
  barra_navegacion_activado=false;
  
  constructor(){
    
  }  

  On(){
    this.barra_navegacion_activado=true;
  }
  Off(){
    this.barra_navegacion_activado=false;
  }
}


