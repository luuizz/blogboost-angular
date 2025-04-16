import { Component } from '@angular/core';
import { CaptionComponent } from '@components/caption/caption.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-item-post-lg',
  imports: [CaptionComponent, NgOptimizedImage],
  templateUrl: './item-post-lg.component.html',
  styleUrl: './item-post-lg.component.scss',
})
export class ItemPostLgComponent {}
