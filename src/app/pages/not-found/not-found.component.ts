import { Component } from '@angular/core';
import { GridComponent } from "../../components/grid/grid.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [GridComponent, NgOptimizedImage],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
