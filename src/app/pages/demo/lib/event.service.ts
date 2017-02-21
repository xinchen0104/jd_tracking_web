import { Injectable, EventEmitter } from '@angular/core';
@Injectable()

export class EventService {

    str : string;

    eventBox$: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.str = "uninited";
    }

}