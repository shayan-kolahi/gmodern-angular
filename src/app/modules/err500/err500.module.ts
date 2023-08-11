import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Err500RoutingModule } from './err500-routing.module';
import { Err500Component } from './page/err500/err500.component';


@NgModule({
  declarations: [
    Err500Component
  ],
  imports: [
    CommonModule,
    Err500RoutingModule
  ]
})
export class Err500Module { }
