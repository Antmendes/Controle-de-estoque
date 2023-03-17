import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private service: ProductsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    if(route.params && route.params['id']){
       return this.service.loadById(route.params['id'])
    }
    return of({id: '',nome: '', categoria: '', qtd: 0});
  }
}
