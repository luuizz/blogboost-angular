import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoriasResponse } from "@shared/interfaces/categoriasResponse";
import {
	getAllCategorias,
	getCategoriaBySlug,
	getPostsByCategoriaSlug,
} from "utils/hygraph";
import { GridComponent } from "@components/grid/grid.component";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { RelatedPost } from "@shared/interfaces/relatedPosts";
import { CardPostMdComponent } from "../../shared/components/card-post-md/card-post-md.component";
import { CommonModule } from "@angular/common";
import { FilterOrderComponent } from "./filter-order/filter-order.component";

@Component({
	selector: "app-categoria",
	imports: [
		GridComponent,
		TopHeaderComponent,
		CardPostMdComponent,
		CommonModule,
		FilterOrderComponent,
	],
	templateUrl: "./categoria.component.html",
	styleUrl: "./categoria.component.scss",
})
export class CategoriaComponent implements OnInit {
	slug: string | null = "";
	categorias: CategoriasResponse[] = [];
	categoriaAtual?: CategoriasResponse;
	categoriaSlug: string = "";
	posts: RelatedPost[] = [];
	postsOrdenados: RelatedPost[] = [];

	constructor(private route: ActivatedRoute) {}

	ordenarPosts(tipo: string) {
		switch (tipo) {
			case "recentes":
				this.postsOrdenados = [...this.posts].sort(
					(a, b) =>
						new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
				);
				break;
			case "antigos":
				this.postsOrdenados = [...this.posts].sort(
					(a, b) =>
						new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
				);
				break;
			case "az":
				this.postsOrdenados = [...this.posts].sort((a, b) =>
					a.titulo.localeCompare(b.titulo),
				);
				break;
			case "za":
				this.postsOrdenados = [...this.posts].sort((a, b) =>
					b.titulo.localeCompare(a.titulo),
				);
				break;
			default:
				this.postsOrdenados = [];
		}
	}
	async ngOnInit() {
		this.slug = this.route.snapshot.paramMap.get("slug");

		if (this.slug) {
			try {
				this.categoriaAtual = await getCategoriaBySlug(this.slug);
				this.categorias = await getAllCategorias();
				this.posts = await getPostsByCategoriaSlug(this.slug);
			} catch (e) {
				console.error("Erro ao carregar a categoria:", e);
			}
		}
	}
}
