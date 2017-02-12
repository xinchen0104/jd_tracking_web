/**
 * Created by pcpulabfed on 2/9/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { brandSelector } from './brandSelector';
import { Demo } from './demo.component';
import { routing } from './demo.routing';

import { BrandSelectorService} from './brandSelector/brandSelector.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        routing
    ],
    declarations: [
        brandSelector,
        Demo
    ],
    providers: [
        BrandSelectorService
    ]
})
export class DemoModule {}