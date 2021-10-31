import { Controller, Get, Param } from '@nestjs/common';
import { OrderStatusesService } from './order-statuses.service';

@Controller('order-statuses')
export class OrderStatusesController {
  constructor(private readonly orderStatusesService: OrderStatusesService) {}
  @Get()
  findAll() {
    return this.orderStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderStatusesService.findOne(+id);
  }
}
