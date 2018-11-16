import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { AddPatientFormComponent } from './components/add-patient-form/add-patient-form.component';
import { AddEditPatientContainerComponent } from './containers/add-edit-patient-container/add-edit-patient-container.component';
import { PatientOverviewContainerComponent } from './containers/patient-overview-container/patient-overview-container.component';
import { PatientsRoutingModule } from './patients-routing.module';
import * as fromPatient from './state/patient.reducer';

@NgModule({
	declarations: [
		AddEditPatientContainerComponent,
		AddPatientFormComponent,
		PatientOverviewContainerComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		PatientsRoutingModule,
		StoreModule.forFeature('patient', fromPatient.reducer),
		// StoreModule.forFeature('appointment', fromAppointment.reducer),
		// StoreModule.forFeature('invoice', fromInvoice.reducer),
		// StoreModule.forFeature('invoicePosition', fromInvoicePosition.reducer),
	],
	exports: [AddEditPatientContainerComponent],
})
export class PatientsModule {}
