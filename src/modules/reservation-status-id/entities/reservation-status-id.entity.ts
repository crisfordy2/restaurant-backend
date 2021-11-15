import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';

import {Reservation} from 'src/modules/reservations/entities/reservation.entity';

@Entity('reservation_statuses')
export class ReservationStatusId {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  description: string;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @OneToMany(() => Reservation, (reservation) => reservation.reservation_status)
  reservations: Reservation[];
}
