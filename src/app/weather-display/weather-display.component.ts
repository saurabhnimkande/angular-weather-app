import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent implements OnInit {
  @Input() weatherObject: any;
  date: any;
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.date = new Date(this.weatherObject?.dt * 1000).toLocaleString();
  }
}
