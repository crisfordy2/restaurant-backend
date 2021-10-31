import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from '~core/interceptors/response.interceptor';
import { OrderType } from './entities/order-type.entity';

@Injectable()
export class OrderTypesService {
  constructor(
    @InjectRepository(OrderType)
    private orderTypeRepository: Repository<OrderType>,
  ) {}

  async findAll(): Promise<Response<OrderType[]>> {
    try {
      const data = await this.orderTypeRepository.find({
        where: { is_active: true },
      });
      return {
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Response<OrderType>> {
    try {
      const data = await this.orderTypeRepository.findOne(id, {
        where: { is_active: true },
      });
      if (!data) {
        throw new NotFoundException(`Order type ${id} not foun`);
      }
      return {
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}
