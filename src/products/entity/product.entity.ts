import { User } from '../../auth/entity/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetails } from '../schema/product-details.schema';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'float8', nullable: true })
  price: number;

  @Column({ type: 'int', default: 0, name: 'storage' })
  storageQuantity: number;

  @Column({ type: 'jsonb', default: {} })
  details: ProductDetails;

  @ManyToOne((type) => User)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;
}
