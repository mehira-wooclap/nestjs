import { User } from '../../auth/entity/user.entity';
import { BaseEntity } from 'typeorm';
import { ProductDetails } from '../schema/product-details.schema';
export declare class Product extends BaseEntity {
    id: string;
    title: string;
    description: string;
    price: number;
    storageQuantity: number;
    details: ProductDetails;
    createdBy: User;
}
