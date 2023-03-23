import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
  public readonly WEATHER_GEO_API_ENDPOINT: string = ' http://api.openweathermap.org/geo/1.0/direct';
  public readonly API_KEY: string = '2d14b2d6b3b8b06db5d881dc7741be52';
}
