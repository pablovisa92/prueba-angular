import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from '@products/components/product/product.component';
import { ProductListComponent } from '@products/components/product-list/product-list.component';

import { SharedModule } from '@shared/shared.module'


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
