import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  constructor(
    private http: HttpService,
    private http2: HttpClient,
  ) { }

  test() {
    this.http.get('/category/list').subscribe(res => {
      console.log('res', res);
    });
    // RequestOptions
    const baseUrl = 'https://www.easy-mock.com/mock/5c947df20ac961049563ba57/blog';
    this.http2.get(`${baseUrl}/tag/list`).subscribe(res => {
      console.log('res', res);
    });
  }

  ngOnInit() {
  }

}
