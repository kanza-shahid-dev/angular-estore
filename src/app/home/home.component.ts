import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategorynavigationComponent } from './components/categorynavigation/categorynavigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CategorynavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
