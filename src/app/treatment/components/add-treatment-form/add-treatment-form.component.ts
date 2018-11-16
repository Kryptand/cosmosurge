import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	EventEmitter,
	Output,
	ChangeDetectorRef,
} from '@angular/core';
import { Treatment } from '../../model/treatment.model';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-add-treatment-form',
	templateUrl: './add-treatment-form.component.html',
	styleUrls: ['./add-treatment-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTreatmentFormComponent implements OnInit {
	@Input() treatment: Treatment;
	@Output() submitForm: EventEmitter<any> = new EventEmitter();
	public treatmentForm = this.fb.group({
		name: ['', Validators.required],
		description: ['', Validators.required],
		pricePerUnit: ['', Validators.required],
		durationInMonths: [''],
	});
	constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

	ngOnInit() {
		if (this.treatment !== null) {
			this.treatmentForm.patchValue({
				name: this.treatment.name,
				description: this.treatment.description,
				pricePerUnit: this.treatment.pricePerUnit,
				durationInMonths: this.treatment.durationInMonths,
			});
		}
		this.cd.markForCheck();
	}
	onSubmit(form: any) {
		if (this.treatmentForm.valid) {
			this.submitForm.emit(this.treatmentForm.value);
		}
	}
	get formValues() {
		return this.treatmentForm.controls;
	}
}
