import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '~core/interceptors/response.interceptor';
import { OrderTypesService } from './order-types.service';

@UseInterceptors(ResponseInterceptor)
@Controller('order-types')
export class OrderTypesController {
  constructor(private readonly orderTypesService: OrderTypesService) {}

  @Get()
  findAll() {
    return this.orderTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderTypesService.findOne(+id);
  }
}
