import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  

  

  constructor(private productsService: ProductsService,
               public dialog: MatDialog,
               private router: Router,
               private route: ActivatedRoute
               
               )      
    {
    this.products$ = this.productsService.findAll()
    .pipe(
      catchError(error => {
        this.openError('Erro ao carregar produtos.')
        return of([])
      })
    );
   }

   onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route} )
   }

   onEdit(product: Product){
    this.router.navigate(['edit', product.id], {relativeTo: this.route} )
   }

   openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

    
  }

}
