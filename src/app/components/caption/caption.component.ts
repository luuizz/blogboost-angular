import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caption',
  imports: [],
  templateUrl: './caption.component.html',
  styleUrl: './caption.component.scss',
  standalone: true,
})
export class CaptionComponent {
  @Input() label: string = '';
}
