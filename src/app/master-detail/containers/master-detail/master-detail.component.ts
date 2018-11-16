import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from '@angular/cdk/layout';
import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import * as fromMasterDetail from '../../state/master-detail.reducer';
/**
 * the shell for the master-detail component
 * orchestrates selection display actions
 * (listens to viewport)
 * disables detail-container on small or portrait devices
 *  _______________________________________
 * |MASTER-    |         DETAIL           |
 * |Container  |         Container        |
 * |___________| ________________________ |
 * @export
 * @class MasterDetailComponent
 * @implements {OnInit}
 * @implements {AfterContentInit}
 * @implements {OnDestroy}
 */
@Component({
	selector: 'rrsoftware-master-detail',
	templateUrl: './master-detail.component.html',
	styleUrls: ['./master-detail.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterDetailComponent implements OnInit, OnDestroy {
	public selectedElements$: Observable<number>;

	// visibility
	public masterVisible = true;
	public detailVisible = true;

	// subscriptions
	public viewportSubscription: Subscription;
	public elementCountSubscription: Subscription;
	private elementCount: number;
	constructor(
		private store: Store<fromMasterDetail.State>,
		public breakpointObserver: BreakpointObserver,
		public cd: ChangeDetectorRef
	) {}

	/**
	 * lifecycle hooks
	 *
	 * @memberof MasterDetailComponent
	 */
	public ngOnInit(): void {
		this.selectedElements$ = this.store.select(
			fromMasterDetail.getSelectedElementCount
		);
		this.orchestrateSelection();
	}
	public ngOnDestroy(): void {
		this.viewportSubscription.unsubscribe();
		this.elementCountSubscription.unsubscribe();
	}

	/**
	 *
	 * toggle visibility of master-container based on selected elements
	 *
	 * @param {BreakpointState} state
	 * @memberof MasterDetailComponent
	 */
	public orchestrateSelection(): void {
		this.elementCountSubscription = this.selectedElements$.subscribe(
			count => {
				console.debug(count);
				this.elementCount = count;
			},
			err => console.debug(err)
		);
		this.viewportSubscription = this.breakpointObserver
			.observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
			.subscribe((state: BreakpointState) => {
				if (state.matches) {
					this.elementCount === 1
						? this.maximizeDetail()
						: this.maximizeMaster();
				} else {
					this.restoreInit();
				}
				this.cd.markForCheck();
			});
	}
	public restoreInit(): void {
		this.masterVisible = true;
		this.detailVisible = true;
	}
	public maximizeDetail(): void {
		this.masterVisible = false;
		this.detailVisible = true;
	}
	public maximizeMaster(): void {
		this.detailVisible = false;
		this.masterVisible = true;
	}
}
