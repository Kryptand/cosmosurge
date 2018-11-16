import {
	Input,
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
} from '@angular/core';

@Component({
	selector: 'rrsoftware-master-actionbar',
	templateUrl: './master-actionbar.component.html',
	styleUrls: ['./master-actionbar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterActionbarComponent implements OnInit {
	@Input() public elementCount: number;
	constructor(public cd: ChangeDetectorRef) {}

	public ngOnInit() {}
}
