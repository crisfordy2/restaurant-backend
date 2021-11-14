import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

import { UserType } from 'src/modules/user-types/entities/user-type.entity';

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

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'bool', default: true })
  is_active: boolean;

  @ManyToOne(() => UserType, (user_type) => user_type.users)
  @JoinColumn({ name: 'user_type_id' })
  user_type: UserType;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}
