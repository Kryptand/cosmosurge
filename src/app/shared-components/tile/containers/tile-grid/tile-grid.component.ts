import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
