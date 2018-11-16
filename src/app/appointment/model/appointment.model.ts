export interface Appointment {
	id: string;
	date: string;
	photo: string;
	payed?:boolean;
	treatments: string[];
}
