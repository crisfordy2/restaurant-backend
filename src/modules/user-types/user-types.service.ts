import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './entities/user-type.entity';

@Injectable()
export class UserTypesService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
  ) {}

  findAll() {
    return this.userTypeRepository.find({ where: { is_active: true } });
  }

  findOne(id: number) {
    return this.userTypeRepository.findOne({ where: { id, is_active: true } });
  }
}
