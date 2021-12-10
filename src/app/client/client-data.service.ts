import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  errorMessage;
  apiPath: string;
  constructor(private http: HttpClient) {
    this.apiPath = "https://vue3-course-api.hexschool.io/api/andychung/products/all";
  }

  run(){
    console.log('client-data Service');
  }

  getAllProduct():Observable<any>{
    return this.http.get(this.apiPath).pipe(map(data => data));
  }

}

export interface AllProduct{
  success: boolean;
  products: Observable<Product>;
}

export interface Product{
  category: string;
  id: string;
  image: string;
  is_enabled: boolean;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
}
