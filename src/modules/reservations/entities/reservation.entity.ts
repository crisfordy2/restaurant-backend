import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

import { User } from 'src/modules/users/entities/user.entity';
import { ReservationStatusId } from 'src/modules/reservation-status-id/entities/reservation-status-id.entity';
import { ReservationTable } from 'src/modules/reservation-tables/entities/reservation-table.entity';

@Entity('reservations')
export class Reservation {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'date' })
  reservation_date: Date;

  @Column({ type: 'bigint'})
  hour_date: number;

  @ManyToOne(() => User, (customer) => customer.reservations)
  @JoinColumn({ name: 'customer_id' })
  customer: User;

  @ManyToOne(() => ReservationStatusId, (reservation_status) => reservation_status.reservations)
  @JoinColumn({ name: 'reservation_status_id' })
  reservation_status: ReservationStatusId;

  @OneToMany(() => ReservationTable, (reservationTable) => reservationTable.reservation)
  reservationsTables: ReservationTable[];

}
