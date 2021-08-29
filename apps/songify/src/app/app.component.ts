import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular-songify/api-interfaces';

@Component({
  selector: 'angular-songify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/songs', icon: 'view_list', title: 'Songs' }
  ];
  bannersIndex = [1, 2, 3, 4];
  constructor(private http: HttpClient) { }
}
