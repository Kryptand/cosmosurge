import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditTreatmentContainerComponent } from './containers/add-edit-treatment-container/add-edit-treatment-container.component';
import { AddEditTreatmentTypeContainerComponent } from './containers/add-edit-treatment-type-container/add-edit-treatment-type-container.component';

const routes: Routes = [
	{ component: AddEditTreatmentContainerComponent, path: '' },
	{ component: AddEditTreatmentTypeContainerComponent, path: 'types' },
	{ component: AddEditTreatmentContainerComponent, path: '/:id' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TreatmentRoutingModule {}
