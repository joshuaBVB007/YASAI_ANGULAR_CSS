import { Component, OnInit } from '@angular/core';

class Opinion{
  whole_name="";
  mail="";
  knowus="";
  something="";
  constructor(name:string,mail:string,knowus:string,something:string){
    this.whole_name=name;
    this.mail=mail;
    this.knowus=knowus;
    this.something=something;
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  whole_name="";
  mail="";
  knowus="";
  something="";

  constructor() { }
  ngOnInit(): void {}

  GetOpinion(){
      var queja=new Opinion(this.whole_name,this.mail,this.knowus,this.something);
      console.log(queja)
  }

}
