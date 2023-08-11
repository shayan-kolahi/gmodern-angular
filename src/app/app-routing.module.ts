import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "",loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: "post",loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)},
  {path: "auth",loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) , canActivate:[AuthGuard]},
  {path: "500",loadChildren: () => import('./modules/err500/err500.module').then(m => m.Err500Module)},
  {path: "admin",loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},

  {path: '404', loadChildren: () => import('./modules/err404/err404.module').then(m => m.Err404Module)},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
