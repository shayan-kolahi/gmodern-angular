import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  post_id:any;
  loading:boolean = false;

  data:any;

  constructor(private _api: ApiService,private getId: ActivatedRoute,) {
    getId.params.subscribe((params) => {
      this.post_id = params["id"]
    })
  }
  ngOnInit(): void {
    this.loading = true;
    this._api.post_id(this.post_id).subscribe({
      next:data => {
        this.data = data.data.post;
        this.loading = false;
      },
      error:err => {
        console.log(err)
      },
    })
  }
}
