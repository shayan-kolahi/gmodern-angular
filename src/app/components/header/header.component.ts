import { Component, OnInit } from '@angular/core';
import {BehaviorSubjectService} from "../../services/behavior-subject.service";
import {ShareService} from "../../services/share.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token_data:any = false;
  constructor(private _subject: BehaviorSubjectService, private _share: ShareService, private _api: ApiService) {
    this._subject.localStorage_token.subscribe(response => {
        if (JSON.parse(<any>localStorage.getItem("logInData")) !== null
          && JSON.parse(<any>localStorage.getItem("logInData")).length > 0
          && this._share.token_data !== "") {
          this.token_data = this._share.token_data;
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
}
