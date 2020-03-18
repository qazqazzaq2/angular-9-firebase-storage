import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http: HttpClient) { }

  getLinkdownload() {
    return this.http.get(baseUrl + '/Download',{})
  }
}
