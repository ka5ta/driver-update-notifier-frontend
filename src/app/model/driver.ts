import { Product } from './product';

export interface Driver {
    id: number;
    product: Product;
    name: string;
    version: string;
    operatingSys: string;
    downloadLink: string;
    releaseDate: Date;
    fileSizeMB: number;
    createdOn: Date;

}
