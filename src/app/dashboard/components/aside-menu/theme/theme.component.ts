import { keys } from './../../../../shared/configs/localstorage-key';
import { ThemeService } from './../../../../core/services/themes/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  currentTheme: any;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = window.localStorage.getItem(keys.theme);
    console.log(this.currentTheme);
  }

  light(): void {
    this.themeService.setLightTheme();
    this.currentTheme = window.localStorage.getItem(keys.theme);
  }
  dark(): void {
    this.themeService.setDarkTheme();
    this.currentTheme = window.localStorage.getItem(keys.theme);
  }
  color(color: string): void {
    this.themeService.setColorTheme(color);
    this.currentTheme = window.localStorage.getItem(keys.theme);
  }
}
