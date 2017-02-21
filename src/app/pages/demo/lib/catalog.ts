import { Brand } from './brand';
export class Catalog{
    catalogType : string;
    catalogId : string;
    catalogName : string;
    parentCatalog : Catalog;
    childCatalogs : Catalog[];
    childBrands : Brand[];
}