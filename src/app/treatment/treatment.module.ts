import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTreatmentContainerComponent } from './containers/add-edit-treatment-container/add-edit-treatment-container.component';
import { AddTreatmentFormComponent } from './components/add-treatment-form/add-treatment-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BotoxFaceTreatmentComponent } from './components/botox-face-treatment/botox-face-treatment.component';

@NgModule({
	declarations: [AddEditTreatmentContainerComponent, AddTreatmentFormComponent, BotoxFaceTreatmentComponent],
	imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class TreatmentModule {}
