import { Component } from '@angular/core';
import { ApiHttpService } from '../core/services/api-http.service';
import { Constants } from '../config/constants';
import { Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';

// export interface WeatherData {
//   base?: string,
//   clouds?: {},
//   cod?: number,
//   coord?: {},
//   dt?: number,
//   id?: number,
//   main?: {},
//   name?: string,
//   sys?: {},
//   timezone?: number,
//   visibility?: number,
//   weather?: [],
//   wind?:{
//     speed?:number,
//     deg?: number,
//     gust?: number,
//   }
// }

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
  providers: [],
})
export class WeatherDetailsComponent implements OnInit {
  constructor(private api: ApiHttpService, public constant: Constants) {}
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.getWeatherData(
          position?.coords?.latitude,
          position?.coords?.longitude
        );
      });
    }
    this.handleApiCall();
    this.getWeatherData(28.6517, 77.2219);// default coordinates
  }
  @Output() weatherDetailsEvent = new EventEmitter<any>();
  weatherData: any = {};
  cityList: any = [];
  location: string = 'Delhi';

  handleApiCall() {
    this.api
      .get(
        `${this.constant.WEATHER_GEO_API_ENDPOINT}?q=${this.location}&limit=5&appid=${this.constant.API_KEY}`
      )
      .subscribe((data) => {
        this.cityList = data;
      });
  }

  getWeatherData(lat: number, lon: number) {
    this.api
      .get(
        `${this.constant.WEATHER_DATA_API_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${this.constant.API_KEY}`
      )
      .subscribe((data) => {
        this.weatherData = data;
        this.weatherDetailsEvent.emit(data);
      });
  }
}
