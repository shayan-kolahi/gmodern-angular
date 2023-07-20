import { Component, OnInit } from '@angular/core';
import {BehaviorSubjectService} from "../../services/behavior-subject.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data:any;
  localStorage_logIn(){
    if (JSON.parse(<any>localStorage.getItem("logInData")) !== null && JSON.parse(<any>localStorage.getItem("logInData")).length > 0) {
      this.data = JSON.parse(<any>localStorage.getItem("logInData"));
    } else {
      this.data = ""
    }
  }
  constructor(private _subject:BehaviorSubjectService) {
    this._subject.onChanged.subscribe(
      response => {
        this.localStorage_logIn()
      }
    )
  }
  ngOnInit(): void {
    this.localStorage_logIn()
  }
}
