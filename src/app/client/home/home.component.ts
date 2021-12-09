import { ClientDataService } from './../client-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<any>;
  detailData: any[] = [];
  // arrayOfItems:Type[];
  constructor(public datasvc: ClientDataService) {

    console.log('ready home data');
    this.datasvc.getAllProduct().subscribe(result => {
      // console.log('result=', result.products);
      this.detailData.push(result);
      // this.products$ = result;
    });

    // this.detailData.push(this.datasvc.getAllProduct());
    this.products$ = this.datasvc.getAllProduct();
   }
  ngOnInit() {
  }



}

