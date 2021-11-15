import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';
import { UserType } from 'src/modules/user-types/entities/user-type.entity';
import {Reservation} from 'src/modules/reservations/entities/reservation.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  lastname: string;

  @Column({ type: 'varchar', length: 50 })
  phonenumber: string;

  @Column({ type: 'varchar', length: 50 })
  identification: string;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @ManyToOne(() => UserType, (user_type) => user_type.users)
  @JoinColumn({ name: 'user_type_id' })
  user_type: UserType;

  @OneToMany(() => Reservation, (reservation) => reservation.customer)
  reservations: Reservation[];
}
