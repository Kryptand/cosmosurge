import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from './card/card.component';
import { CollapsibleSearchBarComponent } from './collapsible-searchbar/collapsible-searchbar.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TileComponent } from './tile/components/tile/tile.component';
import { TileGridComponent } from './tile/containers/tile-grid/tile-grid.component';
import { IonicModule } from '@ionic/angular';

// tslint:disable-next-line:max-line-length
const SHARED_COMPONENTS = [
	CardComponent,
	CollapsibleSearchBarComponent,
	SearchInputComponent,
	TileComponent,
	TileGridComponent
];
@NgModule({
	declarations: SHARED_COMPONENTS,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		IonicModule,
		MatIconModule
	],
	exports: SHARED_COMPONENTS
})
export class SharedComponentsModule {}
