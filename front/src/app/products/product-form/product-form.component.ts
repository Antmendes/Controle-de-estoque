import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ProductsService,
    private snackBar: MatSnackBar,
    private location: Location) { 
    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null],
      qtd: [null]
    })
  }

  ngOnInit(): void {
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
