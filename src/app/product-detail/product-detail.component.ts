import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  vitaminas:boolean=false;
  info_extra:boolean=false;
  pais_procedencia:boolean=false;

  new_url:any;
  new_nombre="";
  new_desc="";

  constructor(private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.new_nombre=this.route.snapshot.params['nombre'];
    this.new_url=this.route.snapshot.params['url'];
    this.new_desc=this.route.snapshot.params['desc'];
  }

  showVitaminas(){
    this.vitaminas=true;
  }
  showinfo_extra(){
    this.info_extra=true;
  }
  showinfo_pais_procedencia(){
    this.pais_procedencia=true;
  }
  
}
