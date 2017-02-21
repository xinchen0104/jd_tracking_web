/**
 * Created by pcpulabfed on 2/9/17.
 */
import { Component } from '@angular/core';
import { EventService } from './lib/event.service';

@Component({
    selector: 'demo',
    styleUrls: ['./demo.scss'],
    templateUrl: './demo.html'
})
export class Demo {
    constructor(public _eventService : EventService) {}
}