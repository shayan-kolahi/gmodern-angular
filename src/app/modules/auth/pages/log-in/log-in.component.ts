import { Component, OnInit } from '@angular/core';
import {ValidationService} from "../../../../services/validation.service";
import {MessageService} from 'primeng/api';
import {ApiService} from "../../../../services/api.service";
import {Router} from '@angular/router';
import {BehaviorSubjectService} from "../../../../services/behavior-subject.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})
export class LogInComponent implements OnInit {
  loading:boolean = false;
  email:string = "";
  password:string = "";

  constructor(private _validation: ValidationService, private messageService: MessageService,private _api:ApiService, private  router: Router, private _subject:BehaviorSubjectService) {}



  ngOnInit(): void {
  }

  submit(){
    if(!this._validation.isEmpty(this.email)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'ایمیل خالیه'});
    } else if(!this._validation.isEmail(this.email)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'ایمیل اشتباهه'});
    } else if(!this._validation.isEmpty(this.password)){
      this.messageService.add({severity:'error', summary: 'خطا', detail: 'کلمه عبور خالیه'});
    }
    // else if(!this._validation.charactersBe(this.password.length , 8)){
    //   this.messageService.add({severity:'error', summary: 'خطا', detail: 'کلمه عبور کم تر از 8 کاراکتر است'});
    // }
    else {
      this.loading = true;
      this._api.logIn(this.email,this.password).subscribe({
        next:data => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
          this._api.logIn_data.push(data.data.token , data.data.user);
          localStorage.setItem("logInData" , JSON.stringify(this._api.logIn_data));
          this._subject.onChanged.next(JSON.parse(<any>localStorage.getItem("logInData")));
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
