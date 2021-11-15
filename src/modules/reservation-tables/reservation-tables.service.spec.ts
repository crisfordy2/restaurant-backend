import { Test, TestingModule } from '@nestjs/testing';
import { ReservationTablesService } from './reservation-tables.service';

describe('ReservationTablesService', () => {
  let service: ReservationTablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationTablesService],
    }).compile();

    service = module.get<ReservationTablesService>(ReservationTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
