import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserTypesService } from '~modules/user-types/user-types.service';
import { Response } from '~core/interceptors/response.interceptor';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private userTypesService: UserTypesService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Response<User>> {
    try {
      console.log("data", createUserDto);
      const { data: userType } = await this.userTypesService.findOne(
        createUserDto.user_type_id,
      );
      console.log("usertype", userType);
      const _user = this.usersRepository.create(createUserDto);
      _user.user_type = userType;

      const user = await this.usersRepository.save(_user);
      return {
        data: user,
        message: 'User created',
      };
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Response<User[]>> {
    const users = await this.usersRepository.find({
      where: { is_active: true },
    });
    return {
      data: users,
    };
  }

  async findOne(id: number): Promise<Response<User>> {
    const user = await this.usersRepository.findOne(id, {
      where: { is_active: true },
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return {
      data: user,
    };
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Response<User>> {
    try {
      const { data: user } = await this.findOne(id);
      const _user = await this.usersRepository.save({
        ...user,
        ...updateUserDto,
      });
      return {
        data: _user,
        message: 'User updated',
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<Response<User>> {
    try {
      const { data: user } = await this.findOne(id);
      const _user = await this.usersRepository.save({
        ...user,
        is_active: false,
      });

      return {
        data: _user,
        message: 'User deleted',
      };
    } catch (error) {
      throw error;
    }
  }

  async getByPhoneNumber(phonenumber: string) {
    const user = this.usersRepository.findOne({ phonenumber });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
