import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditAppointmentContainerComponent } from './containers/add-edit-appointment-container/add-edit-appointment-container.component';

const routes: Routes = [
	{ component: AddEditAppointmentContainerComponent, path: '' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppointmentRoutingModule {}
