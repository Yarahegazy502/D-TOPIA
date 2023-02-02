import { CoreModule } from './../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { ThemeComponent } from './components/aside-menu/theme/theme.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AsideMenuComponent,
    ThemeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class DashboardModule { }
