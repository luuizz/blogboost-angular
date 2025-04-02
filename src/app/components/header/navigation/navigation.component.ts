import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, SearchComponent],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationItems = [
    {
      title: 'Tecnologia',
      link: '#',
      icon: '/icon-tecnologia.svg',
      altIcon: 'Ícone de tecnologia',
    },
    {
      title: 'ReactJS',
      link: '#',
      icon: '/icon-react.svg',
      altIcon: 'Ícone do React',
    },
    {
      title: 'HTML e CSS',
      link: '#',
      icon: '/icon-html-css.svg',
      altIcon: 'Ícone de código',
    },
  ];
}
