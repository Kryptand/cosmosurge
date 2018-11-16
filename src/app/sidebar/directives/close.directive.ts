import { Directive } from '@angular/core';

import { Sidebar } from '../components/sidebar.component';

@Directive({
	selector: '[closeSidebar]',
	host: {
		'(click)': 'onClick()',
	},
})
export class CloseSidebar {
	constructor(private sidebar: Sidebar) {}

	/** @internal */
	onClick(): void {
		if (this.sidebar) {
			this.sidebar.close();
		}
	}
}
