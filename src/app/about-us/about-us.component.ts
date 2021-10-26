import {  Component, OnInit } from '@angular/core';

/*@Component({
  selector:'manual',
  template:'<h1>Hola soy Jona</h1>',
})*/

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  fontColor:string="red";
  canEdit:boolean=false;
  message="I\'m read only!";
  lista=[
    {img:"../assets/About-us/koala-crying.gif",nombre:"Climate crisis"},
    {img:"../assets/About-us/applestree.gif",nombre:"Eat healthy"},
  ];
  constructor() { }
  ngOnInit(): void {}

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
}
