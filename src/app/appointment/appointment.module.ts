import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromAppointment from './state/appointment.reducer';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AddEditAppointmentContainerComponent } from './containers/add-edit-appointment-container/add-edit-appointment-container.component';
import { AddAppointmentFormComponent } from './components/add-appointment-form/add-appointment-form.component';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

@NgModule({
	declarations: [
		AddEditAppointmentContainerComponent,
		AddAppointmentFormComponent,
	],
	imports: [
		CommonModule,
		AppointmentRoutingModule,
		IonicModule,
		StoreModule.forFeature('appointment', fromAppointment.reducer),
	],
	exports: [AddAppointmentFormComponent],
})
export class AppointmentModule {}
