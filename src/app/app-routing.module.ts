import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "",loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: "auth",loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) , canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
