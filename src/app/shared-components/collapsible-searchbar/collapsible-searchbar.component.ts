import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, forwardRef, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export abstract class AbstractControlValueAccessor<T>
	implements ControlValueAccessor {
	value: string;

	/**
	 * Invoked when the model has been changed
	 */
	onChange: (_: any) => void = (_: any) => {};
	/**
	 * Invoked when the model has been touched
	 */
	onTouched: () => void = () => {};
	/**
	 * Method that is invoked on an update of a model.
	 */
	updateChanges() {
		this.onChange(this.value);
	}

	/**
	 * Writes a new item to the element.
	 * @param value the value
	 */
	writeValue(value: string): void {
		this.value = value;
		this.updateChanges();
	}

	/**
	 * Registers a callback function that should be called when the control's value changes in the UI.
	 * @param fn
	 */
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	/**
	 * Registers a callback function that should be called when the control receives a blur event.
	 * @param fn
	 */
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
}

@Component({
	selector: 'mat-collapsible-search-bar',
	templateUrl: './collapsible-searchbar.component.html',
	styleUrls: ['./collapsible-searchbar.component.scss'],
	animations: [
		trigger('slideInOut', [
			state('true', style({ width: '*' })),
			state('false', style({ width: '0' })),
			transition('true => false', animate('300ms ease-in')),
			transition('false => true', animate('300ms ease-out'))
		])
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CollapsibleSearchBarComponent),
			multi: true
		}
	]
})
export class CollapsibleSearchBarComponent extends AbstractControlValueAccessor<
	string
> {
	@ViewChild('input') inputElement: ElementRef;

	@Output() onBlur = new EventEmitter<string>();
	@Output() onClose = new EventEmitter<void>();
	@Output() onEnter = new EventEmitter<string>();
	@Output() onFocus = new EventEmitter<string>();
	@Output() onOpen = new EventEmitter<void>();

	searchVisible = false;

	public close(): void {
		this.searchVisible = false;
		this.value = '';
		this.updateChanges();
		this.onClose.emit();
	}

	public open(): void {
		this.searchVisible = true;
		this.inputElement.nativeElement.focus();
		this.onOpen.emit();
	}

	onBlurring(searchValue: string) {
		if (!searchValue) {
			this.searchVisible = false;
		}
		this.onBlur.emit(searchValue);
	}

	onEnterring(searchValue: string) {
		this.onEnter.emit(searchValue);
	}

	onFocussing(searchValue: string) {
		this.onFocus.emit(searchValue);
	}
}
