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
    {nombre:"Açaí",id:1,url:"../../assets/Frutas/açai.jpeg"},
    {nombre:"Banana",id:2,url:"../../assets/Frutas/banana.jpeg"},
    {nombre:"Cereza",id:3,url:"../../assets/Frutas/cereza.jpeg"},
    {nombre:"Fresa",id:4,url:"../../assets/Frutas/fresa.jpeg"},
    {nombre:"Manzana",id:5,url:"../../assets/Frutas/manzana_verde.jpeg"},
    {nombre:"Melocotón",id:6,url:"../../assets/Frutas/melocoton.jpeg"},
    {nombre:"Piña",id:7,url:"../../assets/Frutas/piña.jpeg"},
    {nombre:"Uvas",id:8,url:"../../assets/Frutas/uvas.jpeg"},
  ];
  smoothies: any[]=[
    {nombre:"Açaí/frutas silvestres",id:9,url:"../../assets/Smoothie/smoothie_1.jpeg"},
    {nombre:"Pepino",id:10,url:"../../assets/Smoothie/smoothie_2.jpeg"},
    {nombre:"Piña",id:11,url:"../../assets/Smoothie/smoothie_3.jpeg"},
    {nombre:"Kiwi",id:12,url:"../../assets/Smoothie/smoothie_4.jpeg"},
    {nombre:"Banana/Melocotón",id:13,url:"../../assets/Smoothie/smoothie_5.jpeg"},
    {nombre:"Sandía",id:14,url:"../../assets/Smoothie/smoothie_6.jpeg"},
    {nombre:"Açaí",id:15,url:"../../assets/Smoothie/smoothie_7.jpeg"},
    {nombre:"Açaí/frutas silvestres",id:16,url:"../../assets/Smoothie/smoothie_1.jpeg"},
  ];
  postres: any[]=[
    {nombre:"cereales y fresa",id:17,url:"../../assets/Postres/postre2.jpeg"},
    {nombre:"Mixto açaí",id:17,url:"../../assets/Postres/postre4.jpeg"},
    {nombre:"leche y uvas",id:18,url:"../../assets/Postres/postre5.jpeg"},
    {nombre:"BananaMix",id:19,url:"../../assets/Postres/postre6.jpeg"},
    {nombre:"leche y canela",id:20,url:"../../assets/Postres/postre7.jpeg"},
    {nombre:"leche y piña",id:21,url:"../../assets/Postres/postre8.jpeg"},
    {nombre:"postre manzana verde",id:21,url:"../../assets/Postres/postre9.jpeg"},
    {nombre:"Postre manzana verde",id:22,url:"../../assets/Postres/postre9.jpeg"},
  ];
  constructor(private router:Router,private service:RestService,private route:ActivatedRoute){} 

  ngOnInit(): void {
      this.tipo_producto='frutas';
      this.service.que_es="productos";
      
  }

  cambio(dato:string){
    this.tipo_producto=dato;
  }

  Add(producto:string){
    this.service.add_to_mi_lista(producto);
  }
  
}


