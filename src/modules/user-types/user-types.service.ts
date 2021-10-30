import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Response } from '~core/interceptors/response.interceptor';
import { UserType } from './entities/user-type.entity';

@Injectable()
export class UserTypesService {
  constructor(
    @InjectRepository(UserType)
    private userTypeRepository: Repository<UserType>,
  ) {}

  async findAll(): Promise<Response<UserType[]>> {
    const userTypes = await this.userTypeRepository.find({
      where: { is_active: true },
    });
    return {
      data: userTypes,
    };
  }

  async findOne(id: number): Promise<Response<UserType>> {
    const userType = await this.userTypeRepository.findOne({
      where: { id, is_active: true },
    });
    if (!userType) {
      throw new NotFoundException(`User Type ${id} not found`);
    }
    return {
      data: userType,
    };
  }
}
