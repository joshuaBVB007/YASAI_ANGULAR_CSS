import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url_de_imagen="";

  constructor(private http:HttpClient) { }

  getBreeds(){
    return this.http.get('https://dog.ceo/api/breed/hound/images');
  }

  InsertImg(url:string){
    this.url_de_imagen=url;
  }

  ReturnImg(){
    return this.url_de_imagen;
  }

}
