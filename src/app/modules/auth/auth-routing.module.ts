import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./pages/log-in/log-in.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  { path: "",
    redirectTo: 'logIn',
    pathMatch: 'full'
  },
  { path: "logIn",
    component: LogInComponent,
    title: "ورود | جی مدرن"
  },
  { path: "register",
    component: RegisterComponent,
    title: "ثبت نام | جی مدرن"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
