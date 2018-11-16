import { InjectionToken } from '@angular/core';
import { MasterDetailConfigModel } from './master-detail-config.model';

export const MasterDetailConfig = new InjectionToken<MasterDetailConfigModel>(
	'Master Detail Config'
);
