import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  url_De_la_imagen="";

  constructor(private rest:RestService) { }

  ngOnInit(): void {
    console.log(this.rest.ReturnImg());
    this.url_De_la_imagen=this.rest.ReturnImg();
  }

}
