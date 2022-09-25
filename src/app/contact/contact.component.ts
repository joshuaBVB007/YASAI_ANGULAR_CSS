import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  profileForm=new FormGroup({
    name:new FormControl('',Validators.required),
    mail:new FormControl('',Validators.required),
    knowus:new FormControl('',Validators.required),  
  })

  isSpecial=false;

  constructor() { }
  ngOnInit(): void {
  }

  SendToServer(){
      console.log(this.profileForm);
      // $( ".isSpecial" ).fadeIn( "slow", function() {
      //   // // Animation complete.
      //   // this.isSpecial=!this.isSpecial;
      // });
  }

}
