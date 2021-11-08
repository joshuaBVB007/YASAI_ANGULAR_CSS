import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { SearchDataPipe } from '../search-data.pipe';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  tipo_producto="";
  //lista por defecto necesaria para que no nos de error de compilacion
  frutas: any[]=[
    {nombre:"Açaí",url:"../../assets/Frutas/açai.jpeg"},
    {nombre:"Banana",url:"../../assets/Frutas/banana.jpeg"},
    {nombre:"Cereza",url:"../../assets/Frutas/cereza.jpeg"},
    {nombre:"Fresa",url:"../../assets/Frutas/fresa.jpeg"},
    {nombre:"Manzana",url:"../../assets/Frutas/manzana_verde.jpeg"},
    {nombre:"Melocotón",url:"../../assets/Frutas/melocoton.jpeg"},
    {nombre:"Piña",url:"../../assets/Frutas/piña.jpeg"},
    {nombre:"Uvas",url:"../../assets/Frutas/uvas.jpeg"},
  ];
  smoothies: any[]=[
    {nombre:"Açaí/frutas silvestres",url:"../../assets/Smoothie/smoothie_1.jpeg"},
    {nombre:"Pepino",url:"../../assets/Smoothie/smoothie_2.jpeg"},
    {nombre:"Piña",url:"../../assets/Smoothie/smoothie_3.jpeg"},
    {nombre:"Kiwi",url:"../../assets/Smoothie/smoothie_4.jpeg"},
    {nombre:"Banana/Melocotón",url:"../../assets/Smoothie/smoothie_5.jpeg"},
    {nombre:"Sandía",url:"../../assets/Smoothie/smoothie_6.jpeg"},
    {nombre:"Açaí",url:"../../assets/Smoothie/smoothie_7.jpeg"},
    {nombre:"Açaí/frutas silvestres",url:"../../assets/Smoothie/smoothie_1.jpeg"},
  ];
  postres: any[]=[
    {nombre:"cereales y fresa",url:"../../assets/Postres/postre2.jpeg"},
    {nombre:"Mixto açaí",url:"../../assets/Postres/postre4.jpeg"},
    {nombre:"leche y uvas",url:"../../assets/Postres/postre5.jpeg"},
    {nombre:"BananaMix",url:"../../assets/Postres/postre6.jpeg"},
    {nombre:"leche y canela",url:"../../assets/Postres/postre7.jpeg"},
    {nombre:"leche y piña",url:"../../assets/Postres/postre8.jpeg"},
    {nombre:"postre manzana verde",url:"../../assets/Postres/postre9.jpeg"},
    {nombre:"Postre manzana verde",url:"../../assets/Postres/postre9.jpeg"},
  ];
  constructor(private router:Router,private http:RestService,private route:ActivatedRoute){} 

  ngOnInit(): void {
      this.tipo_producto='frutas';
  }

  cambio(dato:string){
    this.tipo_producto=dato;
  }

  Add(producto:string){
    console.log(producto);
    this.http.add_to_mi_lista(producto);
  }
  
}


