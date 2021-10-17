import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  lista=[
    {img:"../assets/About-us/koala-crying.gif",nombre:"Climate crisis"},
    {img:"../assets/About-us/applestree.gif",nombre:"Eat healthy"},
  ];
  constructor() { }
  ngOnInit(): void {}
}
