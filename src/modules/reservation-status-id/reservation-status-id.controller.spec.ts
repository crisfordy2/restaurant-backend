import { Test, TestingModule } from '@nestjs/testing';
import { ReservationStatusIdController } from './reservation-status-id.controller';
import { ReservationStatusIdService } from './reservation-status-id.service';

describe('ReservationStatusIdController', () => {
  let controller: ReservationStatusIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationStatusIdController],
      providers: [ReservationStatusIdService],
    }).compile();

    controller = module.get<ReservationStatusIdController>(ReservationStatusIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
