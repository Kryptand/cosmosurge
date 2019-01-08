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
import { MatIconModule } from '@angular/material/icon';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MatButtonModule } from '@angular/material/button';
import { MasterDetailModule } from '../master-detail/master-detail.module';
import { EffectsModule } from '@ngrx/effects';
import { PatientEffects } from './state/patient.effects';

@NgModule({
	declarations: [
		AddEditPatientContainerComponent,
		AddPatientFormComponent,
		PatientOverviewContainerComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatIconModule,
		SharedComponentsModule,
		MatButtonModule,
		MasterDetailModule.forRoot({
			areaName: 'Patient',
			areaIcon: '',
			areaNamePlural: 'Patienten',
			selectionText: ' ausgewählt',
			multipleSelectionText: 'ausgewählt'
		}),
		IonicModule,
		PatientsRoutingModule,
		StoreModule.forFeature('patient', fromPatient.reducer),
		EffectsModule.forFeature([PatientEffects])
		// StoreModule.forFeature('appointment', fromAppointment.reducer),
		// StoreModule.forFeature('invoice', fromInvoice.reducer),
		// StoreModule.forFeature('invoicePosition', fromInvoicePosition.reducer),
	],
	exports: [AddEditPatientContainerComponent]
})
export class PatientsModule {}
