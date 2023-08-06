import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailComponent } from './page/detail/detail.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    DetailComponent
  ],
    imports: [
        CommonModule,
        DetailsRoutingModule,
        ShareModule
    ]
})
export class DetailsModule { }
