import {
	AfterContentInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChild,
	Input,
	OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MasterSelectableListComponent } from '../../components/master-selectable-list/master-selectable-list.component';
import * as fromMasterDetail from '../../state/master-detail.reducer';
import {
	ConfigureIdentifier,
	SelectEntities,
} from '../../state/master-detail.actions';
/**
 * shell for master-list, master-search and master actiobar
 * orchestrates selection and filter events e.g. introduced by the search component
 * @export
 * @class MasterContainerComponent
 * @implements {OnInit}
 * @implements {AfterContentInit}
 */
@Component({
	selector: 'rrsoftware-master-container',
	templateUrl: './master-container.component.html',
	styleUrls: ['./master-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterContainerComponent implements OnInit, AfterContentInit {
	@Input() public elements: any[];
	@Input() public elementIdentifier: string | string[];
	@Input() public displayedProperties: string[];

	@ContentChild(MasterSelectableListComponent)
	public list: MasterSelectableListComponent;
	constructor(
		private cd: ChangeDetectorRef,
		private store: Store<fromMasterDetail.State>
	) {}

	public ngOnInit(): void {
		if (
			this.elementIdentifier == null ||
			this.elements == null ||
			this.displayedProperties == null
		) {
			throw new Error(
				'There are either no elements provided or no element identifiers are configured'
			);
		}
		this.store.dispatch(
			new ConfigureIdentifier({ identifier: this.elementIdentifier })
		);
	}

	public ngAfterContentInit(): void {
		if (this.elements == null || this.displayedProperties == null) {
			throw new Error(
				'There are either no elements provided or no displayed properties are configured'
			);
		}
		this.list.elements = this.elements;
		this.list.elementIdentifier = this.elementIdentifier;
		this.list.displayedProperties = this.displayedProperties;
		this.cd.markForCheck();
		this.list.selected.subscribe(ev => {
			this.store.dispatch(new SelectEntities({ entities: ev }));
		});
	}
}
