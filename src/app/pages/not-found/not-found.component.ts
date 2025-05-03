import { Component } from '@angular/core';
import { GridComponent } from "../../components/grid/grid.component";
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-not-found',
  imports: [GridComponent, NgOptimizedImage, ButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
