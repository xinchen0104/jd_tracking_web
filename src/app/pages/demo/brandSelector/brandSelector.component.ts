import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import 'style-loader!./brandSelector.scss';

import { Brand } from '../lib/brand';
import { Catalog } from '../lib/catalog';
import { EventService } from '../lib/event.service';
import { BrandSelectorService } from './brandSelector.service';
@Component({
  selector: 'brandSelector',
  templateUrl: './brandSelector.html'
})
export class brandSelector implements OnInit{
  keyword : string;
  firstCatalogs : Catalog[];
  secondCatalogs : Catalog[];
  thirdCatalogs : Catalog[];
  brands : Brand[];
  selectedFirstCatalog : Catalog;
  selectedSecondCatalog : Catalog;
  selectedThirdCatalog : Catalog;
  selectBrand : Brand;
  newSelected : any;
  constructor(private _brandSelectorService: BrandSelectorService,
    public _eventService : EventService,
    private router: Router) {
  }
  ngOnInit(){
    console.log("ngOnInit");
    this.keyword = "九牧王（JOEONE）";
    this.updateList();
  }
  updateList(){
    console.log("updateList");
    console.log(this.newSelected);
    if(this.newSelected == null){
        this.initList();
    }
    else if(this.newSelected == this.selectedFirstCatalog){
        console.log("query secondCatalogs");
        this._brandSelectorService
            .getCatalogs(this.newSelected, this.keyword)
            .then(catalogs => {
                console.log(catalogs);
                this.secondCatalogs = catalogs;
                this.selectedSecondCatalog = this.secondCatalogs[0];
                this.newSelected = this.selectedSecondCatalog;
                this.updateList();
            }); 
    } 
    else if(this.newSelected == this.selectedSecondCatalog){
        console.log("query thirdCatalogs");
        this._brandSelectorService
            .getCatalogs(this.newSelected, this.keyword)
            .then(catalogs => {
                console.log(catalogs);
                this.thirdCatalogs = catalogs;
                this.selectedThirdCatalog = this.thirdCatalogs[0];
                this.newSelected = this.selectedThirdCatalog;
                this.updateList();
            });     
    } 
    else if(this.newSelected == this.selectedThirdCatalog){
        console.log("query Brands");
        this._brandSelectorService
            .getBrands(this.newSelected, this.keyword)
            .then(brands => {
                console.log(brands);
                this.brands = brands;
                this.selectBrand = this.brands[0];
                this.newSelected = this.selectBrand;
                this.updateChart();
            });
    } 
  }


  updateChart(){
      console.log("brandSelector.updateChart");
      var event = {
        type : "updateChart",
        brand : this.selectBrand,
        thirdCatalog : this.selectedThirdCatalog
      };
      this._eventService.eventBox$.emit(JSON.stringify(event));
  }
  catalogOnSelect(catalog : Catalog){
      console.log("catalogOnSelect");
      switch(catalog.catalogType){
          case "FIRST":
            this.selectedFirstCatalog = catalog;
            break;
          case "SECOND":
            this.selectedSecondCatalog = catalog;
            break;
          case "THIRD":
            this.selectedThirdCatalog = catalog;
            break;
      }
      this.newSelected = catalog;
      this.updateList();
  }
  brandOnSelect(){
      console.log("brandOnSelect");
  }
  initList(){
      console.log("initList");
      this._brandSelectorService
            .getCatalogs(null, this.keyword)
            .then(catalogs => {
                console.log(catalogs);
                this.firstCatalogs = catalogs;
                this.selectedFirstCatalog = this.firstCatalogs[0];
                //
                    this.firstCatalogs.splice(1,2);
                //
                this.newSelected = this.selectedFirstCatalog;
                this.updateList();
            });
  }


}