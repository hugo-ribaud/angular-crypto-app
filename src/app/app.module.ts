import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from "./app.component";
import { DataService } from "./data.service";
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [BrowserModule, HttpClientModule, NgChartsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
