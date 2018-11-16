import { Directive, ElementRef, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMasterDetail from '../state/master-detail.reducer';
import { getSelectedElementCount } from '../state/master-detail.reducer';
@Directive({
	selector: 'needsElements, [needsElements]',
})
export class NeedsElementsDirective {
	@Input() needsElements: number;
	constructor(
		public element: ElementRef,
		private store: Store<fromMasterDetail.State>
	) {
		this.store.select(getSelectedElementCount).subscribe(count => {
			console.debug(this.element.nativeElement);
			if (count >= this.needsElements) {
				this.element['disabled'] = false;
			} else {
				this.element['disabled'] = true;
			}
		});
	}
}
