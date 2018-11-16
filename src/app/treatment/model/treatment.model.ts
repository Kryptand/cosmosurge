export interface Treatment {
	id: string;
	name: string;
	description?: string;
	pricePerUnit: number;
	durationInMonths?: number;
}
