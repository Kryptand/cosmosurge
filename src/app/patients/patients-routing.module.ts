import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditPatientContainerComponent } from './containers/add-edit-patient-container/add-edit-patient-container.component';
import { PatientOverviewContainerComponent } from './containers/patient-overview-container/patient-overview-container.component';

const routes: Routes = [
	{
		component: PatientOverviewContainerComponent,
		path: ''
		,children:[
			{
				component: AddEditPatientContainerComponent,
				path: 'add'
			},
			{ component: AddEditPatientContainerComponent, path: ':id' }
		]
	},

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PatientsRoutingModule {}
