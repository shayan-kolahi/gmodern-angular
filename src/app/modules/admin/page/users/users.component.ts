import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading:boolean = false;

  data:any;

  constructor(private _api: ApiService,private  router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this._api.admin_user().subscribe({
      next:data => {
        this.data = data.data.post;
        this.loading = false;
      },
      error:err => {
        console.log(err);
        this.router.navigateByUrl('/500');
      },
    })
  }

}
