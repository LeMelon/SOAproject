import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCLISOA';
  private catimg;
  constructor(private httprequest: HttpClient) {
    this.httprequest.get('/catimage').subscribe(
      res => {
        console.log("app.component : " + res);
        this.catimg = res;
      }, err => err
    );

  }
}
