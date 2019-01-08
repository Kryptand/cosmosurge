import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { AddTreatmentFormComponent } from './components/add-treatment-form/add-treatment-form.component';
import { BotoxFaceTreatmentComponent } from './components/botox-face-treatment/botox-face-treatment.component';
import { AddEditTreatmentContainerComponent } from './containers/add-edit-treatment-container/add-edit-treatment-container.component';
import { reducers } from './state/index.reducer';
import { AddTreatmentTypeFormComponent } from './components/add-treatment-type-form/add-treatment-type-form.component';
import { AddEditTreatmentTypeContainerComponent } from './containers/add-edit-treatment-type-container/add-edit-treatment-type-container.component';
import { TreatmentRoutingModule } from './treatment-routing.module';

@NgModule({
	declarations: [
		AddEditTreatmentContainerComponent,
		AddTreatmentFormComponent,
		BotoxFaceTreatmentComponent,
		AddEditTreatmentTypeContainerComponent,
		AddTreatmentTypeFormComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		TreatmentRoutingModule,
		ReactiveFormsModule,
		StoreModule.forFeature('treatmentWithTypes', reducers)
	]
})
export class TreatmentModule {}
