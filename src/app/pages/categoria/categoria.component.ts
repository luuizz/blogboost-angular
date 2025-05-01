import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasResponse } from '@shared/interfaces/categoriasResponse';
import { getAllCategorias  } from 'utils/hygraph';
import { GridComponent } from "../../components/grid/grid.component";

@Component({
  selector: 'app-categoria',
  imports: [GridComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {

  slug: string | null = '';
  categorias: CategoriasResponse[] = [];

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    try {
      const data = await getAllCategorias();
      this.categorias = data;
    } catch {
      console.error("Categoria não existente")
    }
  }
}
