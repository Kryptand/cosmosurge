import {
	EventEmitter,
	Input,
	Component,
	OnInit,
	Output,
	ChangeDetectionStrategy,
} from '@angular/core';

@Component({
	selector: 'rrsoftware-master-search',
	templateUrl: './master-search.component.html',
	styleUrls: ['./master-search.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterSearchComponent implements OnInit {
	@Input() public searchValue: string;
	@Output() public termChanged: EventEmitter<string> = new EventEmitter();
	constructor() {}

	public ngOnInit() {}
}
