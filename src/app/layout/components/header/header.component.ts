import { SharedService } from './../../../shared/services/shared.service';
import { DashboardService } from './../../../dashboard/services/dashboard.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleSideMenu: boolean = false;
  isShow:boolean=false;

  @Input() collapsed: boolean = false;
  @Input() screenWidth: any = 0;

  constructor(
    private dashboardService: DashboardService,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    // this.sharedService.urlData.subscribe((res: any) => {
    //   this.moduleType = res?.moduleType;
    //   console.log(this.moduleType);
    // })

    if (window?.innerWidth < 700) {
      this.toggleSideMenu = true
      this.sharedService.showSideMenu.next(true)
    }
  }

  getDashClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768 && !this.toggleSideMenu) {
      styleClass = 'dash-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && !this.toggleSideMenu) {
      styleClass = 'dash-md-screen';
    }
    return styleClass;
  }

  toggleSide(): void {
    this.toggleSideMenu = !this.toggleSideMenu;
    this.sharedService.showSideMenu.next(this.toggleSideMenu)
  }

  show(){
    this.isShow=!this.isShow
  }
}
