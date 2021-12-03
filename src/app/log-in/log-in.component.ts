import { Component, OnInit } from '@angular/core';
//Lo hemos importado de el modulo de npm: npm install firebase  
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


/* Pasos de instalacion del Auth
https://firebase.google.com/docs/web/setup?authuser=0
*/

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUelzJLvuyI-3A8jWHRUWAS8vgugL5hrc",
  authDomain: "yasaibackend.firebaseapp.com",
  projectId: "yasaibackend",
  storageBucket: "yasaibackend.appspot.com",
  messagingSenderId: "838306389759",
  appId: "1:838306389759:web:ea9799c4bc0fabb885b6ca",
  measurementId: "G-EWXR6F76NK"
};

const app = initializeApp(firebaseConfig);


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const firebaseApp=getAuth();
    createUserWithEmailAndPassword(firebaseApp, "marionetadelpoder7@gmail.com","123456")
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
    });
  }


 

}
