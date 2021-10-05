import { Component, OnInit } from '@angular/core';

/*
  Las propiedades envueltas en [variables] son las que tienen el decorador input en el hijo
  las de su costado son las propiedades del padre
*/

@Component({
  selector: 'app-location',
  templateUrl:  './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {



  constructor() { }
  ngOnInit(): void {
    console.log("somos location")
  }
}
