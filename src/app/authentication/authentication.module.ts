import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthComponent } from './containers/auth/auth.component';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers/auth.reducer';
import { AuthGuard } from './services/auth.guard.service';
import { AuthService } from './services/auth.service';
import { NotAuthenticatedGuard } from './services/not-authenticated.guard.service';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		StoreModule.forFeature('auth', reducers),
		EffectsModule.forFeature([AuthEffects]),
		HttpClientModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: AuthComponent }]),
	],
	exports: [AuthComponent],
	providers: [AuthGuard, NotAuthenticatedGuard, AuthService],
	declarations: [AuthComponent, AuthFormComponent],
})
export class AuthenticationModule {}
