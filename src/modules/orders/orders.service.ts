import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from '~core/interceptors/response.interceptor';
import { OrderStatusesService } from '~modules/order-statuses/order-statuses.service';
import { OrderTypesService } from '~modules/order-types/order-types.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
    private orderTypesService: OrderTypesService,
    private orderStatusesService: OrderStatusesService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Response<Order>> {
    try {
      const { order_type_id, order_status_id } = createOrderDto;
      const { data: type } = await this.orderTypesService.findOne(
        order_type_id,
      );
      const { data: status } = await this.orderStatusesService.findOne(
        order_status_id,
      );
      const _order = this.ordersRepository.create(createOrderDto);
      const order = await this.ordersRepository.save({
        ..._order,
        type,
        status,
      });
      return {
        data: order,
        message: 'Order created',
      };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<Response<Order>> {
    try {
      const order = await this.ordersRepository.findOne(id);
      if (!order) {
        throw new NotFoundException(`Order ${id} not found`);
      }
      return {
        data: order,
      };
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }
}
