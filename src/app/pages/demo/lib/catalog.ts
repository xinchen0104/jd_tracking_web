import { Brand } from './brand';
export class Catalog{
    catalogId : string;
    catalogName : string;
    parentCatalog : Catalog;
    childCatalogs : Catalog[];
    childBrands : Brand[];
}