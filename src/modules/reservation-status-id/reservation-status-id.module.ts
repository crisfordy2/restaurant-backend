import { Module } from '@nestjs/common';
import { ReservationStatusIdService } from './reservation-status-id.service';
import { ReservationStatusIdController } from './reservation-status-id.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ReservationStatusId} from './entities/reservation-status-id.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ReservationStatusId])],
  controllers: [ReservationStatusIdController],
  providers: [ReservationStatusIdService],
  exports: [ReservationStatusIdService],
})
export class ReservationStatusIdModule {}
