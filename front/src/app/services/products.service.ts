import { Injectable } from '@angular/core';
import { Product } from '../products/model/product';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API = 'api/products'

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return  this.httpClient.get<Product[]>(this.API);
  }

  loadById(id: number){
    return this.httpClient.get<Product>(`${this.API}/${id}`)
  }

  save(product: Partial<Product>) {
    if(product.id){
      return this.update(product)
    }
    return this.create(product)
  }

  private create(product: Partial<Product>){
    return this.httpClient.post<Product>(this.API, product)
  }

  private update(product: Partial<Product>){
    return this.httpClient.put<Product>(`${this.API}/${product.id}`, product)
  }
}
