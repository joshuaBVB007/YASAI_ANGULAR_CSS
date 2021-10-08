import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  receptor:any;
  lista!: any[];
  nombre:any;
  raza_a_buscar:string="";

  constructor(private http:RestService,private route:ActivatedRoute){}  
  ngOnInit(): void {
    this.lista=[];
  }

  Buscar(){
      this.display();
  }

  async display(){
        this.lista.splice(0, 25);
        fetch('https://dog.ceo/api/breed/'+this.raza_a_buscar+'/images')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            for (let index = 0; index < 25; index++) {
              const element = data.message[index];
              this.lista.push(element);
              console.log(element);
            }
        }); 
  }

}


