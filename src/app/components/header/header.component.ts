import { Component, OnInit } from '@angular/core';
import {BehaviorSubjectService} from "../../services/behavior-subject.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data:any;

  constructor(private _subject:BehaviorSubjectService) {
    this._subject.onChanged.subscribe(
      response => {
        if (JSON.parse(<any>localStorage.getItem("logInData")) !== null && JSON.parse(<any>localStorage.getItem("logInData")).length > 0) {
          this.data = response;
          console.log('data data data data' , this.data)
        } else {
          this.data = false
        }
      }
    )
  }

  ngOnInit(): void {
    if (JSON.parse(<any>localStorage.getItem("logInData")) !== null && JSON.parse(<any>localStorage.getItem("logInData")).length > 0) {
      this.data = JSON.parse(<any>localStorage.getItem("logInData"));
      console.log('data data data data' , this.data)
    } else {
      this.data = false
    }
  }

}
