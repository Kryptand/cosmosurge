import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MasterDetailModule } from '../master-detail/master-detail.module';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
	
		FormsModule,
		RouterModule.forChild([{ path: '', component: HomePage }]),
	
	],
	declarations: [HomePage]
})
export class HomePageModule {}
