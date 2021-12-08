import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { SearchPipe } from '../search.pipe';
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth } from 'firebase/auth';
import { app } from '../log-in/log-in.component';   


class FirebaseObject{
  nombre:string="";
  url:string="";
  precio:string="";
  constructor(nombre:string,url:string,precio:string){
      this.nombre=nombre;
      this.url=url;
      this.precio=precio;
  }
}

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

  frutas_:any[]=[];
  postres_:any[]=[];
  smoothies_:any[]=[];

  //Propiedad utilizada en el filtro del buscador
  dato:string="";

  constructor(private service:RestService){} 



  ngOnInit(): void {

    const db = getDatabase(app);

    const nodo = ref(db, 'Productos/' +"Frutas");
    onValue(nodo, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.getFrutas(data);
    });

    const nodo_dos = ref(db, 'Productos/' +"Postres");
    onValue(nodo_dos, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.getPostres(data);
    });

    const nodo_tres = ref(db, 'Productos/' +"Smoothies");
    onValue(nodo_tres, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.getSmoothies(data);
    });



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
      this.frutas_.push(new FirebaseObject(i[iterador].Nombre,i[iterador].url,i[iterador].precio));
      iterador++;
    }
  }

  async getPostres(historial:any){
    var i:any=Object.values(historial);
    var iterador=0;
    for (const key in historial) {
      this.postres_.push(new FirebaseObject(i[iterador].Nombre,i[iterador].url,i[iterador].precio));
      iterador++;
    }
  }

  async getSmoothies(historial:any){
    var i:any=Object.values(historial);
    var iterador=0;
    for (const key in historial) {
      this.smoothies_.push(new FirebaseObject(i[iterador].Nombre,i[iterador].url,i[iterador].precio));
      iterador++;
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


