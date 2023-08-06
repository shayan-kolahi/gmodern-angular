import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from "./page/detail/detail.component";

const routes: Routes = [
  { path: ":id",
    component: DetailComponent,
    title: "جی مدرن"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
