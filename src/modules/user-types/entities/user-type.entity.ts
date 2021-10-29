import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';

@Entity('user_types')
export class UserType {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  description: string;

  @Column({ type: 'bool' })
  is_active: boolean;

  @OneToMany(() => User, (users) => users.user_type)
  users: User[];
}
