import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	EventEmitter,
	Output,
	ChangeDetectorRef
} from '@angular/core';
import { Treatment } from '../../model/treatment.model';
import { Validators, FormBuilder } from '@angular/forms';
import { TreatmentType } from '../../model/treatment-type.model';

@Component({
	selector: 'app-add-treatment-form',
	templateUrl: './add-treatment-form.component.html',
	styleUrls: ['./add-treatment-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTreatmentFormComponent implements OnInit {
	@Input() treatment: Treatment;
	@Input() treatmentTypes: TreatmentType[];
	selectedTreatmentType: string;
	@Output() submitForm: EventEmitter<any> = new EventEmitter();
	public treatmentForm = this.fb.group({
		price: ['', Validators.required]
	});
	constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

	ngOnInit() {
		if (this.treatment !== null) {
			this.treatmentForm.patchValue({
				pricePerUnit: this.treatment.price
			});
		}
		this.cd.markForCheck();
	}
	onSubmit(form: any) {
		if (this.treatmentForm.valid) {
			const treatment: Treatment = {
				id: null,
				treatmentType: this.selectedTreatmentType,
				price: this.formValues.price.value
			};
			this.submitForm.emit(treatment);
		}
	}
	get formValues() {
		return this.treatmentForm.controls;
	}
	selectChange($evn:any){
		this.selectedTreatmentType=$evn.detail.value;
	}
}
