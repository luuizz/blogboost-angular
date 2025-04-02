import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GridComponent, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
