import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-management-app';
}
