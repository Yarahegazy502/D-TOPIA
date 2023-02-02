import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import {AvatarModule} from 'primeng/avatar';
import {SkeletonModule} from 'primeng/skeleton';
import {RatingModule} from 'primeng/rating';
import {MenubarModule} from 'primeng/menubar';
const primeNgModules = [
  DynamicDialogModule,
  ConfirmDialogModule,
  MultiSelectModule,
  PaginatorModule,
  CheckboxModule,
  DropdownModule,
  CarouselModule,
  SkeletonModule,
  MenubarModule,
  ButtonModule,
  AvatarModule,
  RatingModule,
  ToastModule,
  TableModule,
];
@NgModule({
  declarations: [],
  imports: [
     ...primeNgModules
    ],
  exports: [
     ...primeNgModules
    ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeNgModule { }
