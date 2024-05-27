import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { products } from '../sampleData/products.data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  getProductsList(): Products[] {
    return products;
  }
}
