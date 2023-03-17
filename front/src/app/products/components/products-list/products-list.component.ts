import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input() products: Product[] = []
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)

 readonly displayedColumns = ['id', 'nome', 'categoria', 'qtd', 'acoes'];

  constructor( ){}

  ngOnInit(): void {}

  onAdd(){
     this.add.emit(true)
   }

   onEdit(product: Product){
      this.edit.emit(product)
   }

}
