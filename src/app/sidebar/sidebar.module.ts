import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarContainer } from './container/sidebar-container.component';
import { Sidebar } from './components/sidebar.component';
import { CloseSidebar } from './directives/close.directive';

@NgModule({
	declarations: [SidebarContainer, Sidebar, CloseSidebar],
	imports: [CommonModule],
	exports: [SidebarContainer, Sidebar, CloseSidebar],
})
export class SidebarModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SidebarModule,
		};
	}
}
