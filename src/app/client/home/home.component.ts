import { HttpClient } from '@angular/common/http';
import { ClientDataService, AllProduct, Product } from './../client-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productModel: AllProduct;
  constructor(public datasvc: ClientDataService) {}

  ngOnInit() {
    console.log('Init data');
    this.getProducts();
    console.log('Init data done');
  }

  getProducts(){
    this.datasvc.getAllProduct().subscribe(products => {
      this.productModel = products;
    });
  }

}

