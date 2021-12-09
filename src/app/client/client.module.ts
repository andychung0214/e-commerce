import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports: [HomeComponent]
})
export class ClientModule { }
