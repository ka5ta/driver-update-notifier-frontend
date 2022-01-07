import { Driver } from './driver';

export interface Product {
    id: number;
    supportLink: string;
    productLink: string;
    name: string;
    manufacturer: string;
    drivers: Driver[];
    lastScraped: Date;

}
