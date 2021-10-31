import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderStatusesModule } from '~modules/order-statuses/order-statuses.module';
import { OrderTypesModule } from '~modules/order-types/order-types.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    OrderStatusesModule,
    OrderTypesModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
