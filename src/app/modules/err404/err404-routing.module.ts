import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Err404Component} from "./page/err404/err404.component";

const routes: Routes = [
  { path: "",
    component: Err404Component,
    title: "404"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Err404RoutingModule { }
