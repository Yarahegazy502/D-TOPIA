import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class LayoutModule { }
