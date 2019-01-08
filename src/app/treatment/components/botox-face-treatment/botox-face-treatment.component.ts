import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input
} from '@angular/core';
import { FaceSpotAmount } from '../../model/face-spot-amount.model';
import { Spot } from '../../model/spot.model';

@Component({
	selector: 'app-botox-face-treatment',
	templateUrl: './botox-face-treatment.component.html',
	styleUrls: ['./botox-face-treatment.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotoxFaceTreatmentComponent implements OnInit {
	@Input() spots: FaceSpotAmount[];
	constructor() {}
	public addSpot(spotName: Spot) {
		const spot = this.spots.find(x => x.spot === spotName);
		const newSpot: FaceSpotAmount = {
			spot: spotName,
			amount: 1
		};
		if (spot !== null && spot !== undefined) {
			spot.amount += 1;
			return;
		}
		this.spots.push(newSpot);
		console.debug(this.spots);
	}
	ngOnInit() {
		if (this.spots == null) {
			this.spots = [];
		}
  }
  public getAmountAccessor(spotName:Spot):number{
    const spot=this.spots.find(x=>x.spot===spotName);
    if(spot==null){
      return 0;
    }
    return spot.amount;
  }

}
