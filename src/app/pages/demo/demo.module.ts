/**
 * Created by pcpulabfed on 2/9/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { brandSelector } from './brandSelector';
import { displayedChart } from './displayedChart';
import { Demo } from './demo.component';
import { routing } from './demo.routing';

import { BrandSelectorService} from './brandSelector/brandSelector.service';
import { DisplayedChartService} from './displayedChart/displayedChart.service';
import { EventService } from './lib/event.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        brandSelector,
        displayedChart,
        Demo
    ],
    providers: [
        BrandSelectorService,
        DisplayedChartService,
        EventService
    ]
})
export class DemoModule {}