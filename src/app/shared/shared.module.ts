import { FooterComponent } from './../layout/components/footer/footer.component';
import { HeaderComponent } from './../layout/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { OverlaySpinnerComponent } from './components/overlay-spinner/overlay-spinner.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ListSkeletonComponent } from './skeleton/list-skeleton/list-skeleton.component';
import { DynamicDataTableComponent } from './components/dynamic-data-table/dynamic-data-table.component';
import { SearchComponent } from './components/search/search.component';
import { AngMaterialModule } from './modules/ang-material/ang-material.module';

const allSharedComponents = [
  DynamicDataTableComponent,
  StatisticsCardComponent,
  OverlaySpinnerComponent,
  ListSkeletonComponent,
  FileUploadComponent,
  CountdownComponent,
  DataTableComponent,
  HeaderComponent,
  FooterComponent,
  AvatarComponent,
  SearchComponent,
]
const allSharedModule = [
  PrimeNgModule,
  AngMaterialModule
]

@NgModule({
  declarations: [
    ...allSharedComponents,
  ],
  imports: [
    CommonModule,
    ...allSharedModule
  ],
  exports: [
    ...allSharedComponents,
    ...allSharedModule

  ]
})
export class SharedModule { }
