import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { AngularSplitModule } from 'angular-split';
import { DetailActionbarComponent } from './components/detail-actionbar/detail-actionbar.component';
import { DetailDisplaySelectionComponent } from './components/detail-display-selection/detail-display-selection.component';
import { MasterActionbarComponent } from './components/master-actionbar/master-actionbar.component';
import { MasterSearchComponent } from './components/master-search/master-search.component';
import { MasterSelectableListComponent } from './components/master-selectable-list/master-selectable-list.component';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { MasterContainerComponent } from './containers/master-container/master-container.component';
import { MasterDetailComponent } from './containers/master-detail/master-detail.component';
import { reducer } from './state/master-detail.reducer';
import { CommonModule } from '@angular/common';
import { NeedsElementsDirective } from './directives/needs-elements.directive';
import { MasterDetailConfigModel } from './token/master-detail-config.model';
import { MasterDetailConfig } from './token/configure-master-detail.token';
import { IonicModule } from '@ionic/angular';

const MASTER_DETAIL_COMPONENTS = [
	MasterDetailComponent,
	DetailContainerComponent,
	DetailActionbarComponent,
	DetailDisplaySelectionComponent,
	MasterContainerComponent,
	MasterActionbarComponent,
	MasterSearchComponent,
	MasterSelectableListComponent,
	NeedsElementsDirective
];

@NgModule({
	declarations: MASTER_DETAIL_COMPONENTS,
	imports: [
		CommonModule,
		AngularSplitModule,
		MatListModule,
		IonicModule,
		MatMenuModule,
		StoreModule.forFeature('masterDetail', reducer),
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatCheckboxModule,
		MatIconModule
	],
	exports: MASTER_DETAIL_COMPONENTS,
	providers: []
})
export class MasterDetailModule {
	public static forRoot(config: MasterDetailConfigModel): ModuleWithProviders {
		return {
			ngModule: MasterDetailModule,
			providers: [{ provide: MasterDetailConfig, useValue: config }]
		};
	}
}
