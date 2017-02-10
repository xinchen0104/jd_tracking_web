/**
 * Created by pcpulabfed on 2/9/17.
 */
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { DemoComponent } from './demo.component';
import { routing } from './demo.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        DemoComponent
    ]
})
export class DemoModule {}