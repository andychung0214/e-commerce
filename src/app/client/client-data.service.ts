import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  apiPath: string;
  constructor(private http: HttpClient) {
    this.apiPath = "https://vue3-course-api.hexschool.io/api/andychung/products/all";

  }

  run(){
    console.log('client-data Service');
  }

  getAllProduct(){
    return this.http.get(this.apiPath);
  }

}
