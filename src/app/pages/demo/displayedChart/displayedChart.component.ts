import { Component, ViewEncapsulation } from '@angular/core';

import { DisplayedChartService } from './displayedChart.service';
import { EventService } from '../lib/event.service';
import 'style-loader!./displayedChart.scss';

@Component({
  selector: 'displayedChart',
  templateUrl: './displayedChart.html'
})

export class displayedChart {

  data:any;

  constructor(private _displayedChartService : DisplayedChartService,
  public _eventService : EventService) 
  {
  }

  ngOnInit() {
    this.data = this._displayedChartService.getAll();
    this.eventListenerInit();
  }

  eventListenerInit(){
    this._eventService.eventBox$.subscribe((e_str : string)=>{
      var e = JSON.parse(e_str);
      console.log(e);
      switch(e.type){
        case "updateChart" :
          console.log("displayedChart.updateChart");
          this._displayedChartService.updateData(e.thirdCatalog);
          this.data = this._displayedChartService.getAll();
          console.log("com data:");
          console.log(this.data);
          break;
        case "test" : 
          console.log("displayedChart.test");
      }
    });
  }

  getResponsive(padding, offset) {
    return this._displayedChartService.getResponsive(padding, offset);
  }
}
