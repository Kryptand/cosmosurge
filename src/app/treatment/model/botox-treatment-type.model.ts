import { TreatmentType } from './treatment-type.model';
import { FaceSpotAmount } from './face-spot-amount.model';
import { Treatment } from './treatment.model';

export class BotoxTreatmentType implements TreatmentType {
	id= 'Botoxbehandlung';
	name = 'Botoxbehandlung';
	description='';
}

export class BotoxTreatment implements Treatment {

	id: string;
	price: number;
	treatmentType:string;
	spots: FaceSpotAmount[];
}
