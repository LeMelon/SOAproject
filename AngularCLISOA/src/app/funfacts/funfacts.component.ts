import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-funfacts',
  templateUrl: './funfacts.component.html',
  styleUrls: ['./funfacts.component.scss']
})
export class FunfactsComponent implements OnInit {
  private funfacts = [];
  constructor(private httprequest: HttpClient) {
    this.httprequest.get('/funfacts').subscribe(
      (res: Array<any>) => {
        this.funfacts = res;
        console.log(res);
      }, err => err
    );
  }

  ngOnInit() {
  }

  clickListener(here) {
    this.httprequest.get('/funfacts').subscribe(
      (res: Array<any>) => {
        this.funfacts = res;
        console.log(res);
      }, err => err
    );
  }
}
