import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { UsersModule } from '~modules/users/users.module';
import {ReservationStatusIdModule} from '~modules/reservation-status-id/reservation-status-id.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation]), UsersModule, ReservationStatusIdModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports: [ReservationsService]
})
export class ReservationsModule {}
