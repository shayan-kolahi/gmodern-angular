import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegisterComponent } from './pages/register/register.component';
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ToastModule,
  ],
})
export class AuthModule { }
