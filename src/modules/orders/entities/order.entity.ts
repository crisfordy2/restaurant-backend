import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderStatus } from '~modules/order-statuses/entities/order-status.entity';
import { OrderType } from '~modules/order-types/entities/order-type.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  order_date: Date;

  @OneToMany(() => OrderType, (type) => type.orders)
  @JoinColumn({ name: 'order_type_id' })
  type: OrderType;

  @OneToMany(() => OrderStatus, (status) => status.orders)
  @JoinColumn({ name: 'order_status_id' })
  status: OrderStatus;
}
