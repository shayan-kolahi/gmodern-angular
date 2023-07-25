import { Component, OnInit } from '@angular/core';
import {BehaviorSubjectService} from "../../services/behavior-subject.service";
import {ShareService} from "../../services/share.service";
import {ApiService} from "../../services/api.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropdown_toggle:boolean= false;
  token_data:any = false;
  constructor(private _subject: BehaviorSubjectService, private _share: ShareService, private _api: ApiService, private messageService: MessageService) {
    this._subject.localStorage_token.subscribe(response => {
        if (JSON.parse(<any>localStorage.getItem("logInData")) !== null
          && JSON.parse(<any>localStorage.getItem("logInData")).length > 0
          && this._share.token_data !== "") {
          this.token_data = this._share.token_data;
        } else {
          this.token_data = false;
        }
        if (JSON.parse(<any>localStorage.getItem("logInData")) !== null
          && JSON.parse(<any>localStorage.getItem("logInData")).length > 0
          && this._share.token_data === "") {
          this._api.getUser().subscribe({
            next: data => {
              this.token_data = data.data;
              this._share.token_data = data.data;
            },
            error: err => {
              console.log(err)
            },
          })
        }
      }
    )
  }
  ngOnInit(): void {}
  dropdown_toggle_click(){
    this.dropdown_toggle = !this.dropdown_toggle
  }

  logOut() {
    this.messageService.clear();
    this.messageService.add({
        key: 'c',
        sticky: true,
        severity:'warn',
        summary:'خروج از حساب کاربری',
        detail:'ایا مطمئن هستید ؟'
      })
  }
  onReject() {
    this.messageService.clear();
  }
  onConfirm() {
    localStorage.removeItem("logInData");
    this._subject.localStorage_token.next(JSON.parse(<any>localStorage.getItem("token")));
    this.messageService.clear();
  }





















}
