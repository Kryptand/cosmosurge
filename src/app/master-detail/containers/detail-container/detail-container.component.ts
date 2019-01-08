import {
	ContentChild,
	Component,
	OnInit,
	EventEmitter,
	Output,
	Input,
	ChangeDetectionStrategy,
	AfterContentInit,
	ChangeDetectorRef,
} from '@angular/core';
import { DetailActionbarComponent } from '../../components/detail-actionbar/detail-actionbar.component';
import { DetailDisplaySelectionComponent } from '../../components/detail-display-selection/detail-display-selection.component';
import { Store } from '@ngrx/store';
import * as fromMasterDetail from '../../state/master-detail.reducer';

@Component({
	selector: 'kryptand-detail-container',
	templateUrl: './detail-container.component.html',
	styleUrls: ['./detail-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailContainerComponent implements OnInit, AfterContentInit {
	@ContentChild(DetailActionbarComponent)
	public actionBar: DetailActionbarComponent;
	@ContentChild(DetailDisplaySelectionComponent)
	public display: DetailDisplaySelectionComponent;

	constructor(private store: Store<fromMasterDetail.State>) {}
	public ngAfterContentInit(): void {
		let elementCount;
		this.store
			.select(fromMasterDetail.getSelectedElementCount)
			.subscribe(val => {
				elementCount = val;
				this.actionBar.elementCount = elementCount;
				this.display.elementCount = elementCount;
				this.display.cd.markForCheck();
			});
	}
	public ngOnInit() {}
}
