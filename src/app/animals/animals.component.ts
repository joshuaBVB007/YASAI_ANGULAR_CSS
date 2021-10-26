import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { SearchDataPipe } from '../search-data.pipe';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  text="";
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

  constructor(private router:Router,private http:RestService,private route:ActivatedRoute){} 

  ngOnInit(): void {}

  Add(producto:string){
    console.log(producto);
    this.http.add_to_mi_lista(producto);
  }
  
}


