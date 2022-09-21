import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { getDatabase, ref, onValue} from "firebase/database";
import { app } from '../log-in/log-in.component';   
import { Router,ActivatedRoute } from '@angular/router';


export class FirebaseObject{
  nombre:string="";
  url:string="";
  precio:string="";
  constructor(nombre:string,url:string,precio:string){
      this.nombre=nombre;
      this.url=url;
      this.precio=precio;
  }
}
export let FirebaseGoogleAuthReceived:any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})

export class ProductosComponent implements OnInit{

  tipo_producto="";
  disenio_menu="";
  btn_disenio="";
  btn_buscar="";
  freno=0;

  frutas_:any[]=[];
  postres_:any[]=[];
  smoothies_:any[]=[];

  //Propiedad utilizada en el filtro del buscador
  dato:string="";

  constructor(private service:RestService,private route:Router,private routeAuth:ActivatedRoute){} 

  ngOnInit(): void {


    let firebaseGoogleAuth:any=sessionStorage.getItem("url");
    FirebaseGoogleAuthReceived=JSON.parse(firebaseGoogleAuth);
    console.log(FirebaseGoogleAuthReceived)

    const db = getDatabase(app);


    if(this.freno===0){
      const nodo = ref(db, 'Productos/' +"Frutas");
    onValue(nodo, (snapshot) => {
      const data = snapshot.val();
      this.getFrutas(data);
    });

    const nodo_dos = ref(db, 'Productos/' +"Postres");
    onValue(nodo_dos, (snapshot) => {
      const data = snapshot.val();
      this.getPostres(data);
    });

    const nodo_tres = ref(db, 'Productos/' +"Smoothies");
    onValue(nodo_tres, (snapshot) => {
      const data = snapshot.val();
      this.getSmoothies(data);
    });
    }



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

  async getFrutas(historial:any){
    var i:any=Object.values(historial);
    var iterador=0;
    for (const key in historial) {
      this.frutas_.push(new FirebaseObject(i[iterador].Nombre,i[iterador].url,i[iterador].Precio));
      iterador++;
    }
  }

  async getPostres(historial:any){
    var i:any=Object.values(historial);
    var iterador=0;
    for (const key in historial) {
      this.postres_.push(new FirebaseObject(i[iterador].Nombre,i[iterador].url,i[iterador].Precio));
      iterador++;
    }
  }

  async getSmoothies(historial:any){
    var i:any=Object.values(historial);
    var iterador=0;
    for (const key in historial) {
      this.smoothies_.push(new FirebaseObject(i[iterador].Nombre,i[iterador].url,i[iterador].Precio));
      iterador++;
    }
  }

  cambio(dato:string){
    this.tipo_producto=dato;
  }
  GoToLogin(){
      console.log("si va")
      this.route.navigateByUrl("/login")
  }
  changeStyle(style:string){
    this.service.ChangeCurrentConfig(style);
    this.freno=1;
    this.ngOnInit();
  }
  Add(producto:FirebaseObject){
    this.service.add_to_mi_lista(producto);
  }
    
}


