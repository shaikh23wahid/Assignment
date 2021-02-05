import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataadapterService {

  constructor(private http: HttpClient) { }

  fetchData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
