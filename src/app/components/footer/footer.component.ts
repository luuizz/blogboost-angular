import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  lastYear: number = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
