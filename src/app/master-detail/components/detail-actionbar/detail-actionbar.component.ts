import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: 'kryptand-detail-actionbar',
	templateUrl: './detail-actionbar.component.html',
	styleUrls: ['./detail-actionbar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailActionbarComponent implements OnInit {
	@Input() public elementCount: number;
	constructor() {}

	public ngOnInit() {}
}
