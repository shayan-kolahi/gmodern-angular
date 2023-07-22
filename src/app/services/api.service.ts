import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  // logIn
  logIn(email : string, password : string){return this.http.post<any>( environment.baseUrl+'login', { email: email , password: password })}
  // logIn
  // register
  register(name : string , email : string, password : string){return this.http.post<any>( environment.baseUrl+'register', { name: name , email: email , password: password })}
  // register
  // getUser
  headers = new HttpHeaders({
    'Authorization': `Bearer ${JSON.parse(<any>localStorage.getItem("logInData"))}`
  });
  getUser(){
    return this.http.get<any>( environment.baseUrl+'user',{'headers':this.headers})
  }
  // getUser





}
