import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  isEmpty(data:string):boolean{
    if(data === ""){
      return false
    } else {
      return true
    }
  }
  isEmail(emailAdress:string):boolean{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regex)) {
      return true;
    }else{
      return false;
    }
  }
  charactersBe(e:number , num:number):boolean {
    if (e >= num){
      return true
    }
    return false
  }



}
