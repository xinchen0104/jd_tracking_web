import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import 'style-loader!./brandSelector.scss';

import { Brand } from '../lib/brand';
import { Catalog } from '../lib/catalog';
import { BrandSelectorService } from './brandSelector.service';
@Component({
  selector: 'brandSelector',
  templateUrl: './brandSelector.html',

})
export class brandSelector implements OnInit{
  keyword : String;
  firstCatalogs : Catalog[];
  secondCatalogs : Catalog[];
  thirdCatalogs : Catalog[];
  brands : Brand[];
  selectedFirstCatalog : Catalog;
  selectedSecondCatalog : Catalog;
  selectedThirdCatalog : Catalog;
  selectBrand : Brand;
  newSelected : any;
  constructor(private brandSelectorService: BrandSelectorService,
    private router: Router) {
  }
  ngOnInit(){
    console.log("ngOnInit");
    this.keyword = "九牧王";
    this.updateList();
  }
  updateList(){
    console.log("updateList");
    if(this.newSelected == null){
        this.initList();
    }
    else if(this.newSelected == this.selectedFirstCatalog){
        this.brandSelectorService
            .getCatalogs(this.newSelected)
            .then(catalogs => this.secondCatalogs = catalogs);
        this.selectedSecondCatalog = this.secondCatalogs[0];
        this.newSelected = this.selectedSecondCatalog;
        this.updateList(); 
    } 
    else if(this.newSelected == this.selectedSecondCatalog){
        this.brandSelectorService
            .getCatalogs(this.newSelected)
            .then(catalogs => this.thirdCatalogs = catalogs);
        this.selectedThirdCatalog = this.thirdCatalogs[0];
        this.newSelected = this.selectedThirdCatalog;
        this.updateList();     
    } 
    else if(this.newSelected == this.selectedThirdCatalog){
        this.brandSelectorService
            .getBrands(this.newSelected)
            .then(brands => this.brands = brands);
        this.selectBrand = this.brands[0];
        this.newSelected = this.selectBrand;
        this.updateChart();
    } 
  }
  updateChart(){
      console.log("updateChart");
  }
  catalogOnSelect(){
      console.log("catalogOnSelect");
  }
  brandOnSelect(){
      console.log("brandOnSelect");
  }
  initList(){
      console.log("initList");
  }


}