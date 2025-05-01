import { CommonModule } from "@angular/common";
import {
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
	HostListener,
} from "@angular/core";

@Component({
	selector: "app-filter-order",
	imports: [CommonModule],
	templateUrl: "./filter-order.component.html",
	styleUrl: "./filter-order.component.scss",
	standalone: true,
})
export class FilterOrderComponent {
	@Output() orderChange = new EventEmitter<string>();
	@ViewChild("dropdownRef", { static: false }) dropdownRef!: ElementRef;

	isDropdownOpen = false;

	toggleDropdown() {
		this.isDropdownOpen = !this.isDropdownOpen;
	}

	@HostListener("document:click", ["$event"])
	onDocumentClick(event: MouseEvent) {
		const clickedInside = this.dropdownRef?.nativeElement.contains(
			event.target,
		);
		if (!clickedInside) {
			this.isDropdownOpen = false;
		}
	}

	options = [
		{ label: "Mais recentes", value: "recentes" },
		{ label: "Mais antigos", value: "antigos" },
		{ label: "A - Z", value: "az" },
		{ label: "Z - A", value: "za" },
	];

	selectOrder(value: string) {
		this.orderChange.emit(value);
		this.isDropdownOpen = false;
	}
}
