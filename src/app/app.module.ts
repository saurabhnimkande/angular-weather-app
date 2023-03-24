import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { FormsModule } from '@angular/forms';
import { ApiHttpService } from './core/services/api-http.service';
import { Constants } from './config/constants';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WeatherDetailsComponent,
    WeatherDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiHttpService, Constants],
  bootstrap: [AppComponent],
})
export class AppModule {}
