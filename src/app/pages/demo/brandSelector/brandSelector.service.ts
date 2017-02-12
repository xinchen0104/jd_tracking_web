import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Brand } from '../lib/brand';
import { Catalog } from '../lib/catalog';

@Injectable()
export class BrandSelectorService{
  private headers = new Headers({'Content-Type': 'application/json'});
  private catalogsUrl = 'api/catalogs';  // URL to web api
  private brandUrl = 'api/brand';

  constructor(private http: Http) { }
  getCatalogs(parentCatalogId: string) : Promise<Catalog[]>{
    return this.http
        .post(this.catalogsUrl, JSON.stringify({action : "getCatalogsByParentId", parentCatalogId : parentCatalogId}), {headers : this.headers})
        .toPromise()
        .then(res=>res.json().data)
        .catch(this.handleError);
  }
  getBrands(parentCatalogId: string) : Promise<Brand[]>{
    return this.http
        .post(this.brandUrl, JSON.stringify({action : "getBrandsByParentId", parentCatalogId : parentCatalogId}), {headers : this.headers})
        .toPromise()
        .then(res=>res.json().data)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}