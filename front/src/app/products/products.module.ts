import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './container/products/products.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProductFormComponent } from './container/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from '././components/products-list/products-list.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
