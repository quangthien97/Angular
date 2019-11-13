import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  result;
  data;
  constructor(private http: HttpClient) { }
  handleHeader() {
    if (localStorage.getItem('token') != null) {
      return {
        headers: new HttpHeaders({
          token: localStorage.getItem('token')
        })
      }
    } else{
      console.log("==========")
    }

  }
  get(url) {
    return this.http.get(url, this.handleHeader());
  }
  post(url, data) {
    return this.http.post(url, data, this.handleHeader());
  }
  put(url, data) {
    return this.http.put(url, data, this.handleHeader());
  }
  delete(url) {
    return this.http.delete(url, this.handleHeader());
  }
}
