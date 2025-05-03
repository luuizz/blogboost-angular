import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { GridComponent } from "@components/grid/grid.component";
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
  selector: 'app-no-results',
  imports: [GridComponent, ButtonComponent, NgOptimizedImage],
  templateUrl: './no-results.component.html',
  styleUrl: './no-results.component.scss'
})
export class NoResultsComponent {

}
