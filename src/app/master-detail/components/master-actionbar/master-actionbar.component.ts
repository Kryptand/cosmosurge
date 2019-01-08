import {
	Input,
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'kryptand-master-actionbar',
	templateUrl: './master-actionbar.component.html',
	styleUrls: ['./master-actionbar.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterActionbarComponent implements OnInit {
	@Input() public elementCount: number;
	@Output() public addClicked: EventEmitter<void> = new EventEmitter();
	@Output() public deleteClicked: EventEmitter<void> = new EventEmitter();
	constructor(public cd: ChangeDetectorRef) {}
	public addTriggered(event: any) {
		this.addClicked.emit();
	}
	public deleteTriggered(event: any) {
		this.deleteClicked.emit();
	}
	public ngOnInit() {}
}
