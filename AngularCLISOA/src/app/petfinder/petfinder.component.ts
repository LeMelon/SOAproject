import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-petfinder',
  templateUrl: './petfinder.component.html',
  styleUrls: ['./petfinder.component.scss']
})
export class PetfinderComponent implements OnInit {
  private petfinder = [];
  private petimage;
  constructor(private httprequest: HttpClient) {
    console.log('i am here now 1 ');
    this.httprequest.get('/catfinder', { responseType: 'text' }).subscribe(
      res => {
        console.log('i am here now 2 ');
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(res,'text/xml');
        var x = xmlDoc.getElementsByTagName("breed");
        for (var i = 0; i < x.length; i++) {
          this.petfinder.push(x[i].childNodes[0].nodeValue);
        }
        console.log(this.petfinder);
      }, err => err
    );
  }

  ngOnInit() {
  }

  private imageaupif = '';

  clickListen(pet) {
    console.log(pet);
    this.httprequest.get('http://api.inaturalist.org/v1/search?q=' + pet + '&sources=taxa&per_page=1', { responseType: 'text' }).subscribe(
      (res: any) => {
        const r = JSON.parse(res);
        const images = r.results.map(elem => elem.record.default_photo.url);
        this.imageaupif = images[0];
        console.log('i am here now 10');
        console.log(images);
        this.petimage = JSON.parse(res);
        console.log(this.petimage.url);
      }, err => err
    );
  }
}

