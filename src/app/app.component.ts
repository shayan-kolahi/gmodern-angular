import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd,NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  isActive:boolean = true;
  constructor(private router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        if(e.urlAfterRedirects === '/404' || e.urlAfterRedirects === '/500'){
          this.isActive = false;
        }
      }
    })
  }


  ngOnInit() {

  }

}
