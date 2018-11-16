export interface Invoice {
	id: string;
	issuedAt: Date;
	payed: boolean;
	positions: string[];
}
