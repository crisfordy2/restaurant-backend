import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from '~core/interceptors/response.interceptor';
import { OrderStatus } from './entities/order-status.entity';

@Injectable()
export class OrderStatusesService {
  constructor(
    @InjectRepository(OrderStatus)
    private orderStatusesRepository: Repository<OrderStatus>,
  ) {}

  async findAll(): Promise<Response<OrderStatus[]>> {
    try {
      const statuses = await this.orderStatusesRepository.find({
        where: { is_active: true },
      });
      return {
        data: statuses,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Response<OrderStatus>> {
    try {
      const status = await this.orderStatusesRepository.findOne(id, {
        where: { is_active: true },
      });
      if (!status) {
        throw new NotFoundException(`Order Status ${id} not found`);
      }
      return {
        data: status,
      };
    } catch (error) {
      throw error;
    }
  }
}
