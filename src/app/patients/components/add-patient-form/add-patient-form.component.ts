import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Patient } from '../../model/patient.model';

@Component({
	selector: 'app-add-patient-form',
	templateUrl: './add-patient-form.component.html',
	styleUrls: ['./add-patient-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddPatientFormComponent implements OnInit {
	@Input() patient: Patient;
	@Output() submitForm: EventEmitter<any> = new EventEmitter();
	public patientForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: ['', Validators.required],
	});
	constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

	ngOnInit() {
		if (this.patient !== null) {
			this.patientForm.patchValue({
				firstName: this.patient.firstName,
				lastName: this.patient.lastName,
			});
		}
		this.cd.markForCheck();
	}
	onSubmit(form: any) {
		if (this.patientForm.valid) {
			console.debug(this.patientForm.value);
			this.submitForm.emit(this.patientForm.value);
		}
	}
	get formValues() {
		return this.patientForm.controls;
	}
}
