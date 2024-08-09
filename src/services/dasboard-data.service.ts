import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import e from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class DasboardDataService {
  public data: any;
  constructor(private http: HttpClient) {

  }
  public fetchDashboardData(page_no:number ):Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page_no??= 1}`);
  }
  public getUserData(id:number ):Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id??= 1}`);
  }

}
