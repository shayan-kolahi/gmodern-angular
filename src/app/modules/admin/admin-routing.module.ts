import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {MainComponent} from "./page/main/main.component";
import {UsersComponent} from "./page/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: "dashboard", component: HomeComponent},
      {path: "users", component: UsersComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
