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
  lista: any[]=[
    {nombre:"Jirafa",url:"../../assets/Animals/elefante.jpeg"},
    {nombre:"Jirafa",url:"../../assets/Animals/hipopotamo.jpeg"},
    {nombre:"Jirafa",url:"../../assets/Animals/jirafa.jpeg"},
    {nombre:"Jirafa",url:"../../assets/Animals/leon.jpeg"},
    {nombre:"Jirafa",url:"../../assets/Animals/rinoceronte.jpeg"},
    {nombre:"Jirafa",url:"../../assets/Animals/zebra.jpeg"},
  ];
  nombre:any;
  raza_a_buscar:string="";

  constructor(private http:RestService,private route:ActivatedRoute){} 
  ngOnInit(): void {}
  Buscar(){
      //this.display();
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


