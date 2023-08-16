import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: any[] = [
    {
      name: "داشبورد",
      link: "/admin/dashboard",
      img: 'crate-apple.svg'
    },
    {
      name: "لیست کاربران",
      link: "/admin/asd",
      img: 'user.svg'
    },
  ]
}
