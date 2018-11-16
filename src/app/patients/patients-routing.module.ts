import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditPatientContainerComponent } from './containers/add-edit-patient-container/add-edit-patient-container.component';

const routes: Routes = [
	{ component: AddEditPatientContainerComponent, path: '' },
	{ component: AddEditPatientContainerComponent, path: '/:id' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PatientsRoutingModule {}
