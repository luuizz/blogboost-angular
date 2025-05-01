import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, SearchComponent, NgOptimizedImage],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationItems = [
    {
      title: 'Tecnologia',
      link: '/categoria/tecnologia',
      icon: '/icon-tecnologia.svg',
      altIcon: 'Ícone de tecnologia',
    },
    {
      title: 'ReactJS',
      link: '/categoria/react',
      icon: '/icon-react.svg',
      altIcon: 'Ícone do React',
    },
    {
      title: 'HTML e CSS',
      link: '/categoria/html-css',
      icon: '/icon-html-css.svg',
      altIcon: 'Ícone de código',
    },
  ];

  @Output() linkClicked = new EventEmitter<void>();

  onLinkClick() {
    this.linkClicked.emit();
  }
}
