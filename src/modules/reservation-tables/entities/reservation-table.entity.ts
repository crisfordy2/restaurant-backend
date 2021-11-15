import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    PrimaryColumn
} from 'typeorm';

import {Reservation} from 'src/modules/reservations/entities/reservation.entity';
import { Table } from 'src/modules/tables/entities/table.entity';

@Entity('reservation_tables')  
export class ReservationTable {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  
  @ManyToOne(() => Reservation, (reservation) => reservation.reservationsTables)
  @JoinColumn({ name: 'reservation_id' })  
  reservation: Reservation;

  @ManyToOne(() => Table, (table) => table.reservationTables)
  @JoinColumn({ name: 'table_id' })  
  table: Table;  
}
