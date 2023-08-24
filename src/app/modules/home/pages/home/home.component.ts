import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment.prod";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _api:ApiService,private  router: Router) {}
  loading:boolean= false;
  data:any;
  bannerPosts:any;
  indexPosts_data:any;
  indexPosts_links:any;
  getData(url:string){
    this.loading = true;
    this._api.posts(url).subscribe({
      next:data => {
        this.data = data.data;
        this.bannerPosts = data.data.bannerPosts;
        this.indexPosts_data = data.data.indexPosts.data
        this.indexPosts_links = data.data.indexPosts.links
        this.loading = false;
      },
      error:err => {
        console.log(err);
        this.router.navigateByUrl('/500');
      }
    })
  }
  ngOnInit(): void {
    this.getData(environment.baseUrl+'get/posts?page=1');
  }
  btn_change_date(url_btn:string){
    window.scroll(0,0);
    this.getData(url_btn);
  }
}
