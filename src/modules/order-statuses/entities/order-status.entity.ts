import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '~modules/orders/entities/order.entity';

@Entity('order_statuses')
export class OrderStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  description: string;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @OneToMany(() => Order, (order) => order.status)
  orders: Order[];
}
