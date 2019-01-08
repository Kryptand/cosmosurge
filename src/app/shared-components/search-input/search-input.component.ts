import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	OnInit,
	Output
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {
	constructor() {}
	searchTerm$ = new Subject<string>();
	@Output() searchEmitted: EventEmitter<string> = new EventEmitter();
	ngOnInit() {
		this.searchTerm$
			.pipe(
				debounceTime(400),
				distinctUntilChanged()
			)
			.subscribe(term => {
				this.searchEmitted.emit(term);
			});
	}
}
