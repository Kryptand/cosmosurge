import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { RootRoutingModule } from './root-routing.module';
import { IonicModule } from '@ionic/angular';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MasterDetailModule } from '../master-detail/master-detail.module';

@NgModule({
	declarations: [ShellComponent],
	imports: [
		CommonModule,
		IonicModule,
		SidebarModule.forRoot(),
		RootRoutingModule,
	],
})
export class RootModule {}
