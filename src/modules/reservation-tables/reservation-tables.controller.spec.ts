import { Test, TestingModule } from '@nestjs/testing';
import { ReservationTablesController } from './reservation-tables.controller';
import { ReservationTablesService } from './reservation-tables.service';

describe('ReservationTablesController', () => {
  let controller: ReservationTablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationTablesController],
      providers: [ReservationTablesService],
    }).compile();

    controller = module.get<ReservationTablesController>(ReservationTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
