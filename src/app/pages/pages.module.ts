import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';


@NgModule({
  declarations: [
    PagesComponent,
    ChangePasswordComponent,
    ImageUploadComponent,
    MyProfileComponent,
    VideoUploadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
