import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategorynavigationComponent } from './components/categorynavigation/categorynavigation.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CategorynavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
