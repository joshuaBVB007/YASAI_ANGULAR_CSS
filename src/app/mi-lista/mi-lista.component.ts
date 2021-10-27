import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.css']
})
export class MiListaComponent implements OnInit {
  lista:any;
  constructor(private rest:RestService) { }
  ngOnInit(): void {
    this.rest.Return_lista_subject().subscribe(lista_=>{
        this.lista=lista_;
    })
  }

}
