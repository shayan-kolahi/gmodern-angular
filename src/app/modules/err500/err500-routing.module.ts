import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Err500Component} from "./page/err500/err500.component";

const routes: Routes = [
  { path: "",
    component: Err500Component,
    title: "500"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Err500RoutingModule { }
