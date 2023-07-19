import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegisterComponent } from './pages/register/register.component';
import {FormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";


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
  providers: [MessageService],
})
export class AuthModule { }
