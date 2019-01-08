import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TreatmentType } from '../../model/treatment-type.model';

@Component({
	selector: 'app-add-treatment-type-form',
	templateUrl: './add-treatment-type-form.component.html',
	styleUrls: ['./add-treatment-type-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTreatmentTypeFormComponent implements OnInit {
	@Input() treatmentType: TreatmentType;
	@Output() submitForm: EventEmitter<any> = new EventEmitter();
	public treatmentTypeForm = this.fb.group({
		name: ['', Validators.required],
		description: [''],
	});
	constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

	ngOnInit() {
		if (this.treatmentType !== null) {
			this.treatmentTypeForm.patchValue({
				name: this.treatmentType.name,
				description: this.treatmentType.description,
			});
		}
		this.cd.markForCheck();
	}
	onSubmit(form: any) {
			this.submitForm.emit(this.treatmentTypeForm.value);
	}
	get formValues() {
		return this.treatmentTypeForm.controls;
	}
}
