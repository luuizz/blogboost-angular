import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  termo: string = ''

  constructor(private router: Router) {}

  onSearch(query: string) {
    if (!query) {
      return;
    }
    this.router.navigate(['/results'], { 
      queryParams: { q: query } 
    });
  }
}
