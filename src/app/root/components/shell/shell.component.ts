import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
	public opened = false;
	constructor() {}

	ngOnInit() {}

	public toggleOpened(): void {
		this.opened = !this.opened;
	}
}
