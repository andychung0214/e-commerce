import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  apiPath: 'https://vue3-course-api.hexschool.io/api/andychung/products/all';
  constructor(private http: HttpClient) {
    // this.apiPath = 'https://vue3-course-api.hexschool.io/api/andychung/products/all';

  }

  run(){
    console.log('admin-data Service');
  }

  getAllProduct(){
    return this.http.get(this.apiPath);
  }
}
