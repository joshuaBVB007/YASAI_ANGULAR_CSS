import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  url_recibida="";
  nombre_recibido="";
  constructor(private router:Router,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.url_recibida=this.route.snapshot.params['img'];
    this.nombre_recibido=this.route.snapshot.params['nombre_producto'];
  }

  go(){
    console.log("Yendo a info en ruta relativa");
    this.router.navigate(['info'], { relativeTo: this.route });
  }
}
