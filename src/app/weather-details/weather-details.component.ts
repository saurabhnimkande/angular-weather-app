import { Component } from '@angular/core';
import { ApiHttpService } from '../core/services/api-http.service';
import { Constants } from '../config/constants';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
  providers: [ApiHttpService, Constants],
})
export class WeatherDetailsComponent {
  constructor(private api: ApiHttpService, public constant: Constants) {};
  cityList: any = [];
  location: string = "London";
  handleApiCall() {
    console.log('city', this.location, this.constant.WEATHER_GEO_API_ENDPOINT);
    this.api
      .get(
        `${this.constant.WEATHER_GEO_API_ENDPOINT}?q=${this.location}&limit=5&appid=2d14b2d6b3b8b06db5d881dc7741be52`
      )
      .subscribe((data) => {
        console.log('data', data);
        this.cityList = data;
      });
  }
}
