import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Brand } from '../lib/brand';
import { Catalog } from '../lib/catalog';

@Injectable()
export class BrandSelectorService{
  private headers = new Headers({'Content-Type': 'application/json'});
  private catalogsUrl = 'api/catalog';  // URL to web api
  private brandUrl = 'api/brand';

  constructor(private http: Http) { }
  getCatalogs(parentCatalog: Catalog, keyword : string) : Promise<Catalog[]>{
    var parentCatalogId;
    var CatalogType;
    if(parentCatalog == null){
      parentCatalogId = null;
      CatalogType = "FIRST";
    }else{
      parentCatalogId = parentCatalog.catalogId;
      switch(parentCatalog.catalogType){
        case "FIRST" : 
          CatalogType = "SECOND";
          break;
        case "SECOND" : 
          CatalogType = "THIRD";
          break;
      }
    }
    return this.http
        .post(this.catalogsUrl, JSON.stringify({action : "getCatalogsByParentId", parentCatalogId : parentCatalogId, catalogType : CatalogType, keyword : keyword}), {headers : this.headers})
        .toPromise()
        .then(res=>res.json() as Catalog[])
        .catch(this.handleError);
  }

  
  getBrands(parentCatalog: Catalog, keyword : string) : Promise<Brand[]>{
    var parentCatalogId;
    parentCatalogId = parentCatalog.catalogId;
    return this.http
        .post(this.brandUrl, JSON.stringify({action : "getBrandsByParentId", parentCatalogId : parentCatalogId, keyword : keyword}), {headers : this.headers})
        .toPromise()
        .then(res=>res.json() as Brand[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}