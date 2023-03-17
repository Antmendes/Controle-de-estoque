import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 form = this.formBuilder.group({
  nome: [''],
  categoria: [''],
  qtd: [0]
})

  constructor(private formBuilder: NonNullableFormBuilder,  // classe que nao deixa ser null
    private service: ProductsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const product: Product = this.route.snapshot.data['product']
    this.form.patchValue({
      nome: product.nome,
      categoria: product.categoria,
      qtd: product.qtd,
      
      
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(data => this.onSuccess(), error => this.onError())
  }

  onCancel(){
     this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Produto salvo com sucesso!', 'ok');
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao cadastrar produto','ok')
  }

}
