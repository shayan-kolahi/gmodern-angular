import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './page/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './page/main/main.component';
import { UsersComponent } from './page/users/users.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    MainComponent,
    UsersComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ShareModule
    ]
})
export class AdminModule { }
