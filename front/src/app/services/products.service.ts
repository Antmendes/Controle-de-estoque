import { Injectable } from '@angular/core';
import { Product } from '../products/model/product';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API = './assets/aproducts.json'

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return  this.httpClient.get<Product[]>(this.API);
  }
}
