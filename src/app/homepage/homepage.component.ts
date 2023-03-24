import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  weatherObject: any = {};
  updateWeatherDetails(weatherObject: any) {
    this.weatherObject = weatherObject;
    console.log('in parent', this.weatherObject);
  }
}
