import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
} from '@angular/core';
import {
	trigger,
	transition,
	query,
	stagger,
	animate,
	style,
	keyframes,
} from '@angular/animations';

@Component({
	selector: 'rrsoftware-detail-display-selection',
	templateUrl: './detail-display-selection.component.html',
	styleUrls: ['./detail-display-selection.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('ngIfAnimation', [
			transition('void => *', [
				query('*', style({ opacity: 0, background: 'blue' }), {
					optional: true,
				}),
				query(
					'*',
					stagger('300ms', [
						animate(
							'0.8s ease-in',
							keyframes([
								style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
								style({
									opacity: 0.5,
									transform: 'translateY(35px)',
									offset: 0.3,
								}),
								style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
							])
						),
					]),
					{ optional: true }
				),
			]),
			transition('* => void', [
				query('*', style({ opacity: 1, background: 'red' }), {
					optional: true,
				}),
				query(
					'*',
					stagger('300ms', [
						animate(
							'0.8s ease-in',
							keyframes([
								style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
								style({
									opacity: 0.5,
									transform: 'translateY(35px)',
									offset: 0.3,
								}),
								style({
									opacity: 0,
									transform: 'translateY(-75%)',
									offset: 1.0,
								}),
							])
						),
					]),
					{ optional: true }
				),
			]),
		]),
	],
})
export class DetailDisplaySelectionComponent implements OnInit {
	@Input() public selectionType: string;
	@Input() public areaName: string;
	@Input() public areaIcon: string;
	@Input() public elementCount: number;
	constructor(public cd: ChangeDetectorRef) {}

	public ngOnInit() {}
}
