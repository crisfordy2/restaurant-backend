import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '~modules/orders/entities/order.entity';

@Entity('order_types')
export class OrderType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  description: string;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @OneToMany(() => Order, (order) => order.type)
  orders: Order[];
}
