import { Module } from '@nestjs/common';
import { OrderTypesService } from './order-types.service';
import { OrderTypesController } from './order-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderType } from './entities/order-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderType])],
  controllers: [OrderTypesController],
  providers: [OrderTypesService],
  exports: [OrderTypesService],
})
export class OrderTypesModule {}
