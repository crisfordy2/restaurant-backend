import { Test, TestingModule } from '@nestjs/testing';
import { ReservationStatusIdService } from './reservation-status-id.service';

describe('ReservationStatusIdService', () => {
  let service: ReservationStatusIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationStatusIdService],
    }).compile();

    service = module.get<ReservationStatusIdService>(ReservationStatusIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
