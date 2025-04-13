import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AsideComponent } from "./aside/aside.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GridComponent, NavigationComponent, AsideComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  ismenuOpen = false;

  toggleMenu() {
    this.ismenuOpen = !this.ismenuOpen;
  }

}
