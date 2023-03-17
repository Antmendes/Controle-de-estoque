import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './container/product-form/product-form.component';
import { ProductsComponent } from './container/products/products.component';
import { ProductResolver } from './guards/product.resolver';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'new', component: ProductFormComponent, resolve: {product: ProductResolver} },
  { path: 'edit/:id', component: ProductFormComponent, resolve: {product: ProductResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
