import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [DashDefaultComponent],
  imports: [
    CommonModule,
    DashDefaultRoutingModule,
    SharedModule,
    HighchartsChartModule
  ]
})
export class DashDefaultModule { }
