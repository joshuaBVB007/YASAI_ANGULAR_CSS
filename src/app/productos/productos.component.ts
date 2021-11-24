import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute,NavigationExtras,Router } from '@angular/router';
import { SearchDataPipe } from '../search-data.pipe';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit{

  tipo_producto="";
  //lista por defecto necesaria para que no nos de error de compilacion
  frutas: any[]=[
    {nombre:"Açaí",id:1,url:"../../assets/Productos/Frutas/açai.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Banana",id:2,url:"../../assets/Productos/Frutas/banana.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Cereza",id:3,url:"../../assets/Productos/Frutas/cereza.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Fresa",id:4,url:"../../assets/Productos/Frutas/fresa.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Manzana",id:5,url:"../../assets/Productos/Frutas/manzana_verde.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Melocotón",id:6,url:"../../assets/Productos/Frutas/melocoton.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Piña",id:7,url:"../../assets/Productos/Frutas/piña.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Uvas",id:8,url:"../../assets/Productos/Frutas/uvas.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
  ];
  smoothies: any[]=[
    {nombre:"Açaí/frutas silvestres",id:9,url:"../../assets/Productos/Smoothie/smoothie_1.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Pepino",id:10,url:"../../assets/Productos/Smoothie/smoothie_2.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Piña",id:11,url:"../../assets/Productos/Smoothie/smoothie_3.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Kiwi",id:12,url:"../../assets/Productos/Smoothie/smoothie_4.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Banana/Melocotón",id:13,url:"../../assets/Productos/Smoothie/smoothie_5.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Sandía",id:14,url:"../../assets/Productos/Smoothie/smoothie_6.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Açaí",id:15,url:"../../assets/Productos/Smoothie/smoothie_7.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Açaí/frutas silvestres",id:16,url:"../../assets/Productos/Smoothie/smoothie_1.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},    
  ];
  postres: any[]=[
    {nombre:"cereales y fresa",id:17,url:"../../assets/Productos/Postres/postre2.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Mixto açaí",id:17,url:"../../assets/Productos/Postres/postre4.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"leche y uvas",id:18,url:"../../assets/Productos/Postres/postre5.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"BananaMix",id:19,url:"../../assets/Productos/Postres/postre6.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"leche y canela",id:20,url:"../../assets/Productos/Postres/postre7.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"leche y piña",id:21,url:"../../assets/Productos/Postres/postre8.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"postre manzana verde",id:21,url:"../../assets/Productos/Postres/postre9.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},
    {nombre:"Postre manzana verde",id:22,url:"../../assets/Productos/Postres/postre9.jpeg",
    descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s, "},

  ];
  disenio_menu="";
  btn_disenio="";
  btn_buscar="";

  //Propiedad utilizada en el filtro del buscador
  dato:string="";

  constructor(private router:Router,private service:RestService,private route:ActivatedRoute){} 



  ngOnInit(): void {
      this.tipo_producto='frutas';
      this.service.que_es="productos";


      if(this.service.ReturnCurrentConfig()==="cereza"){
            this.disenio_menu="menu";
            this.btn_disenio="btn_interno";
            this.btn_buscar="btn-search";
      }else if(this.service.ReturnCurrentConfig()==="manzana"){
            this.disenio_menu="menu-manzana";
            this.btn_disenio="btn_interno-manzana";
            this.btn_buscar="btn-search-manzana";
      }else if(this.service.ReturnCurrentConfig()==="uvas"){
            this.disenio_menu="menu-uva";
            this.btn_disenio="btn_interno-uva";
            this.btn_buscar="btn-search-uva";
      }
      
  }

  cambio(dato:string){
    this.tipo_producto=dato;
  }
  changeStyle(style:string){
    this.service.ChangeCurrentConfig(style);
    this.ngOnInit();
  }
  Add(producto:string){
    this.service.add_to_mi_lista(producto);
  }  
}


