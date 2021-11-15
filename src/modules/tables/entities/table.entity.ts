import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import { ReservationTable } from 'src/modules/reservation-tables/entities/reservation-table.entity';

@Entity('tables')  
export class Table {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  desription: string;

  @Column({ type: 'bigint'})
  capability: number;

  @Column({ type: 'bigint'})
  is_active: number;

  @OneToMany(() => ReservationTable, (reservationTable) => reservationTable.table)
  reservationTables: ReservationTable[];
}
