import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-aside',
  imports: [NavigationComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  @Output() linkClicked = new EventEmitter<void>();

  handleLinkClick() {
    this.linkClicked.emit();
  }

}
