import { Product } from './product';

export interface EmailProfile {
    id: number;
    email: string;
    products: Product[];
    subscribeDate: Date;


}
