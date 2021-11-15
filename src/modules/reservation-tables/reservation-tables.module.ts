import { Module } from '@nestjs/common';
import { ReservationTablesService } from './reservation-tables.service';
import { ReservationTablesController } from './reservation-tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationTable } from './entities/reservation-table.entity';
import { ReservationsModule } from '~modules/reservations/reservations.module';
import { TablesModule } from '~modules/tables/tables.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationTable]), ReservationsModule, TablesModule],
  controllers: [ReservationTablesController],
  providers: [ReservationTablesService],
  exports: [ReservationTablesService]
})
export class ReservationTablesModule {}
