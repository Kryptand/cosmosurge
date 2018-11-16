import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
} from '@angular/core';
import { ComposedIdUtility } from '../../helper/composed-id-utility';

@Component({
	selector: 'rrsoftware-master-selectable-list',
	templateUrl: './master-selectable-list.component.html',
	styleUrls: ['./master-selectable-list.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterSelectableListComponent implements OnInit {
	@Input() public elements: any[];
	@Input() public elementIdentifier: string | string[];
	@Input() public displayedProperties: string[];
	@Output() public selected: EventEmitter<any[]> = new EventEmitter();
	private selectedElements: any[] = [];
	constructor() {}

	public ngOnInit(): void {}
	public selectElement(event: any, elements: any): void {
		this.selectedElements = elements.map(el => el.value);
		this.selected.emit(this.selectedElements);
	}
}
