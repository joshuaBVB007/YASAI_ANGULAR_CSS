import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {
  receptor:any;
  lista: any[]=[
    {nombre:"Açaí",url:"../../assets/frutas/açai.jpeg"},
    {nombre:"Banana",url:"../../assets/frutas/banana.jpeg"},
    {nombre:"Cereza",url:"../../assets/frutas/cereza.jpeg"},
    {nombre:"Fresa",url:"../../assets/frutas/fresa.jpeg"},
    {nombre:"Manzana",url:"../../assets/frutas/manzana_verde.jpeg"},
    {nombre:"Melocotón",url:"../../assets/frutas/melocoton.jpeg"},
    {nombre:"Piña",url:"../../assets/frutas/piña.jpeg"},
    {nombre:"Uvas",url:"../../assets/frutas/uvas.jpeg"},
  ];
  nombre:any;
  raza_a_buscar:string="";

  constructor(private router:Router,private http:RestService,private route:ActivatedRoute){} 
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
  SeeDetails(url:string){
      this.http.InsertImg(url);
      this.router.navigateByUrl("details");
  }

}


