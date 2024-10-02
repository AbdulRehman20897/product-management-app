import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';

interface Product {
  name: string;
  quantity: number;
  code: string;
}

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {
  productForm: FormGroup;
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>(this.products); // Initialize MatTableDataSource
  displayedColumns: string[] = ['name', 'quantity', 'code'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      code: ['', Validators.required],
    });

    this.products = [
      { name: 'Product A', quantity: 10, code: 'A001' },
      { name: 'Product B', quantity: 20, code: 'B002' },
    ];

    this.dataSource.data = this.products;
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.products.push(newProduct);

      console.log(this.products);
      this.dataSource.data = [...this.products];

      this.productForm.reset();
    }
  }

  selectProduct(product: Product) {
    this.productForm.patchValue({
      name: product.name,
      quantity: product.quantity,
      code: product.code,
    });
  }
}