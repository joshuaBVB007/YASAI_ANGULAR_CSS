import { Component, OnInit } from '@angular/core';
//Lo hemos importado de el modulo de npm: npm install firebase  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";





/* Pasos de instalacion del Auth
https://firebase.google.com/docs/web/setup?authuser=0
*/

import { initializeApp } from 'firebase/app';
import { RestService } from '../rest.service';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUelzJLvuyI-3A8jWHRUWAS8vgugL5hrc",
  authDomain: "yasaibackend.firebaseapp.com",
  projectId: "yasaibackend",
  //linea requerida en realtime database para conectar con la base de datos
  databaseURL: "https://yasaibackend-default-rtdb.europe-west1.firebasedatabase.app",
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

  firebaseAuthInstance:any;
  email="";
  password="";

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.firebaseAuthInstance=getAuth();
  }

  SignUp(){
    createUserWithEmailAndPassword(this.firebaseAuthInstance, this.email,this.password)
        .then((userCredential) => {

          this.service.Correctly();
          const user = userCredential.user;
        })
        .catch((error) => {
          this.service.InCorrectly();
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
    });
  }
  

  SignIn(){
    signInWithEmailAndPassword(this.firebaseAuthInstance, this.email,this.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("todo en orden")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Datos incorrectos")
    });
  }

  // este es un metodo que hace un insert a realtime  database
  PruebaDeInsert(){
    console.log("Ha entrado en Prueba")
    const db = getDatabase(app);

    set(ref(db, 'users/' + 2), {
      username: "Jonathan",
    });
  }

}


