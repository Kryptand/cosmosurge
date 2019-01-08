import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	ChangeDetectorRef,
	Input,
	Output,
	EventEmitter,
} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';
import { Appointment } from '../../model/appointment.model';
import { Guid } from '../../../utils/guid';

@Component({
	selector: 'app-add-appointment-form',
	templateUrl: './add-appointment-form.component.html',
	styleUrls: ['./add-appointment-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddAppointmentFormComponent implements OnInit {
	@Input() appointment: Appointment;
	@Output() submitForm: EventEmitter<any> = new EventEmitter();
	options: CameraOptions = {
		quality: 100,
		destinationType: this.camera.DestinationType.FILE_URI,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE,
	};
	photo: string;
	nativeCameraActivated = false;
	selectedDate = new Date().toISOString();

	constructor(
		private camera: Camera,
		private cd: ChangeDetectorRef,
		private plt: Platform
	) {}
	takePhoto() {
		this.camera.getPicture(this.options).then(
			imageData => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64 (DATA_URL):
				this.photo = 'data:image/jpeg;base64,' + imageData;
			},
			err => {
				console.error(err);
			}
		);
	}
	onFileChanged(event) {
		const reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = () => {
			const result = reader.result as string;
			this.photo = result;
			this.cd.markForCheck();
		};
		reader.onerror = error => console.error(error);
	}
	onSubmit($event: any) {
		const values: Appointment = {
			id: null,
			date: this.selectedDate,
			photo: this.photo,
			treatments:null
		};
		this.submitForm.emit(values);
	}
	ngOnInit() {
		this.plt.is('cordova')
			? (this.nativeCameraActivated = true)
			: (this.nativeCameraActivated = false);
	}
}
