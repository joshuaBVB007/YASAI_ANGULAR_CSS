import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set } from "firebase/database";
import { Router } from '@angular/router';
import { FirebaseError, initializeApp } from 'firebase/app';
import { RestService } from '../rest.service';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, UserCredential } from "firebase/auth";

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

const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  userActive:any;
  firebaseAuthInstance:any;
  email="";
  password="";

  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
    this.firebaseAuthInstance=getAuth();
    this.GetData();
  }

  GetData(){
    signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential:any = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      sessionStorage.setItem("url",JSON.stringify(user));
      this.router.navigate(['products']);
    }).catch((error: FirebaseError | any) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
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
      this.userActive=getAuth().currentUser;
      console.log(this.userActive.uid);
      this.service.userOnSession(this.userActive);
      this.router.navigateByUrl("products")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Datos incorrectos")
    });
  }

}


