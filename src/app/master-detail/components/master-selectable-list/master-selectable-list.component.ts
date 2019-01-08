import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';

@Component({
	selector: 'kryptand-master-selectable-list',
	templateUrl: './master-selectable-list.component.html',
	styleUrls: ['./master-selectable-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterSelectableListComponent implements OnInit {
	@Input() public elements: any[];
	@Input() public elementIdentifier: string | string[];
	@Input() public displayedProperties: string[];
	@Output() public selected: EventEmitter<any[]> = new EventEmitter();
	private selectedElements: any[] = [];
	constructor(public cd: ChangeDetectorRef) {}

	public ngOnInit(): void {}
	public selectElement(event: any, elements: any): void {
		this.selectedElements = elements.map(el => el.value);
		this.selected.emit(this.selectedElements);
	}
	public toggleVisiblity(element: any): void {
		for (let i = 0; i < this.elements.length; i++) {
			this.elements[i].checked = false;
			if (this.elements[i].id === element.id) {
				this.elements[i].checked = !element.checked;
			}
		}
		if (element.checked === true) {
			this.selected.emit([element]);
		} else {
			this.selected.emit([]);
		}
		this.cd.detectChanges();
	}
}
