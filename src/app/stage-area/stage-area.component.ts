import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-stage-area',
  templateUrl: './stage-area.component.html',
  styleUrls: ['./stage-area.component.css']
})
export class StageAreaComponent implements OnInit {

  lista:any;

  constructor(private rest:RestService) { }

  async ngOnInit(): Promise<void> {
        //solicitamos los datos
        console.log("somos stage");
        (await this.rest.RequestData()).subscribe((lista: any)=>{
          console.log(lista);
        })
  }

}
