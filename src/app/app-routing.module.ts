import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/services/auth.guard.service';
import { NotAuthenticatedGuard } from './authentication/services/not-authenticated.guard.service';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: './authentication/authentication.module#AuthenticationModule',
		canActivate: [NotAuthenticatedGuard],
	},
	{
		path: '',
		loadChildren: './root/root.module#RootModule',
		// canActivate: [AuthGuard],
	},
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
