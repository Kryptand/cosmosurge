import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { Camera } from '@ionic-native/camera/ngx';
import { SharedComponentsModule } from './shared-components/shared-components.module';
@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserAnimationsModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		SidebarModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([]),
		HttpClientModule,
		AuthenticationModule,
		StoreDevtoolsModule.instrument({
			// Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
		SharedComponentsModule,
	],
	providers: [
		StatusBar,
		Camera,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
