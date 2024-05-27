import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  productsList: Products[] = [];

  constructor(private productsService: ProductsService) {
    this.productsList = productsService.getProductsList();
    console.log('productsList', this.productsList);
  }
}
