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
  svgasd:string = '<svg class="w-6 h-6 fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M336.4 126.4l15.58 8.703l15.63-8.701c54.78-30.58 67.04-3.746 67.66-2.871C446.8 140.4 449.8 171.4 446.2 192h32.15C488.6 121.3 449.7 43.84 352 98.39c-24.04-13.42-44.48-18.79-61.55-18.29c8.387 9.725 14.44 21.88 19.34 34.9C317.4 117.2 325.9 120.5 336.4 126.4zM432 287.1c-8.875 0-16 7.123-16 15.1s7.125 16 16 16S448 312.9 448 303.1S440.9 287.1 432 287.1zM65.82 192C62.16 171.4 65.17 140.4 76.73 123.5c.625-.873 12.88-27.7 67.66 2.871l15.58 8.703l15.63-8.701c54.78-30.58 67.04-3.746 67.66-2.871C254.8 140.4 257.8 171.4 254.2 192l32.11 .0003C296.6 121.3 257.7 43.75 160 98.3C62.29 43.75 23.43 121.3 33.71 192L65.82 192zM368 64c4.094 0 8.188-1.562 11.31-4.688l32-32c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-32 32c-6.25 6.25-6.25 16.38 0 22.62C359.8 62.44 363.9 64 368 64zM176 64c4.094 0 8.188-1.562 11.31-4.688l32-32c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-32 32c-6.25 6.25-6.25 16.38 0 22.62C167.8 62.44 171.9 64 176 64zM80 287.1c-8.875 0-16 7.125-16 16s7.125 15.1 16 15.1S96 312.9 96 303.1S88.88 287.1 80 287.1zM432 447.1c8.875 0 16-7.125 16-16s-7.125-16-16-16S416 423.1 416 431.1S423.1 447.1 432 447.1zM472 224H40C17.91 224 0 241.9 0 264v208C0 494.1 17.91 512 40 512h432c22.09 0 40-17.91 40-40v-208C512 241.9 494.1 224 472 224zM480 464c0 8.836-7.164 16-16 16h-416C39.16 480 32 472.8 32 464V384h448V464zM480 352H32V272C32 263.2 39.16 256 48 256h416C472.8 256 480 263.2 480 272V352zM80 447.1c8.875 0 16-7.126 16-16s-7.125-16-16-16S64 423.1 64 431.1S71.13 447.1 80 447.1z"/></svg>'
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
