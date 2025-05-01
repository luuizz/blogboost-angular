import {
	Component,
	Input,
	CUSTOM_ELEMENTS_SCHEMA,
	AfterViewInit,
	PLATFORM_ID,
  Inject,
} from "@angular/core";
import { CategoriasResponse } from "@shared/interfaces/categoriasResponse";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-top-header",
	imports: [CommonModule],
	templateUrl: "./top-header.component.html",
	styleUrl: "./top-header.component.scss",
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopHeaderComponent implements AfterViewInit {
	@Input() categorias: CategoriasResponse[] = [];
	@Input() categoriaAtualSlug: string = "";
	currentCategorySlug: string = "";

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.currentCategorySlug = params.get("slug") ?? "";
		});
	}
  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper(".swiper-filter", {
        modules: [Navigation],
        slidesPerView: "auto",
        speed: 500,
        navigation: {
          nextEl: ".ctrl .next-filter",
          prevEl: ".ctrl .prev-filter",
        },
      });
    }
  }
}
