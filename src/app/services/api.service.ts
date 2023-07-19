import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  // logIn
  logIn(email : string, password : string){
    return this.http.post<any>( environment.baseUrl+'login', { email: email , password: password })
  }
  logIn_data:any = [];
  // logIn

}
