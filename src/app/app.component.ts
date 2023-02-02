import { AlertsService } from './core/services/alerts/alerts.service';
import { keys } from './shared/configs/localstorage-key';
import { ThemeService } from './core/services/themes/theme.service';
import { SharedService } from './shared/services/shared.service';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { OnlineStatusService } from 'ngx-online-status';
import { OnlineStatusType } from 'ngx-online-status/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'title';
  currentTheme: any = '';
  url:any={};

  constructor(
    private onlineStatusService: OnlineStatusService,
    private activatedRoute: ActivatedRoute,
    private sharedService:SharedService,
    private alertsService:AlertsService,
    private themeService: ThemeService,
    private router:Router,
  ){

  }
  ngOnInit(): void {
    let data=this.activatedRoute.snapshot.data;
      console.log(data);

      this.router.events
      .pipe(
        filter((event:any) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data) {
              return child.snapshot.data;
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.sharedService.urlData.next(data)
          this.url=data;
          console.log(this.url);
        }
      });

      this.currentTheme = window.localStorage.getItem(keys?.theme);
    if (this.currentTheme == 'light') {
      this.themeService.setLightTheme();
    }
    if (this.currentTheme == 'dark') {
      this.themeService.setDarkTheme();
    } else {
      this.themeService.setLightTheme();
    }

    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      status?this.alertsService?.openSnackBar(`your internet connection was  restored`,2000,'center','bottom')
    :this.alertsService?.openSnackBar(`you are currently offline`,2000,'center','bottom')
    });
  }

}
