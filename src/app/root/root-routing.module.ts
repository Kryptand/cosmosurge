import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authentication/services/auth.guard.service';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		component: ShellComponent,
		children: [
			{
				path: '',
				loadChildren: '../home/home.module#HomePageModule',
			},
			{
				path: 'patients',
				loadChildren: '../patients/patients.module#PatientsModule',
			},
			{
				path: 'appointments',
				loadChildren: '../appointment/appointment.module#AppointmentModule',
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RootRoutingModule {}
