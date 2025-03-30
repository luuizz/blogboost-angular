import { Component } from '@angular/core';
import { GridComponent } from '../../../../components/grid/grid.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
