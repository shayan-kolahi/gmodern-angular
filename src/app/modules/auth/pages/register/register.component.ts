import { Component, OnInit } from '@angular/core';
import {ValidationService} from "../../../../services/validation.service";
import {MessageService} from "primeng/api";
import {ApiService} from "../../../../services/api.service";
import {Router} from "@angular/router";
import {BehaviorSubjectService} from "../../../../services/behavior-subject.service";
import {ShareService} from "../../../../services/share.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  loading:boolean = false;
  name:string = "";
  email:string = "";
  password:string = "";

  constructor(private _validation: ValidationService, private messageService: MessageService,private _api:ApiService, private  router: Router, private _subject:BehaviorSubjectService, private _share:ShareService) {}



  ngOnInit(): void {
  }

  submit(){
    if(!this._validation.isEmpty(this.name)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'نام خالیه'});
    } else if(!this._validation.isEmpty(this.email)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'ایمیل خالیه'});
    } else if(!this._validation.isEmail(this.email)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'ایمیل اشتباهه'});
    } else if(!this._validation.isEmpty(this.password)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'کلمه عبور خالیه'});
    } else {
      this.loading = true;
      this._api.register(this.name ,this.email,this.password).subscribe({
        next:data => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
          localStorage.setItem("logInData" , JSON.stringify(data.token));
          this._share.token_data = data.user;
          this._subject.localStorage_token.next(JSON.parse(<any>localStorage.getItem("token")));
          this.loading = false;
          this.email = "";
          this.password = "";
          this.router.navigateByUrl('/');
        },
        error:err => {
          this.messageService.add({severity:'error', summary: 'خطا', detail: err.error.message});
          this.loading = false;
          console.log('err',err);
        },
      })
    }
  }

}
