import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getAllCategories(): Category[] {
    return [];
  }
}
