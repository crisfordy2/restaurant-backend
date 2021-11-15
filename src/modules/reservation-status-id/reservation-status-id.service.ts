import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateReservationStatusIdDto } from './dto/create-reservation-status-id.dto';
import { UpdateReservationStatusIdDto } from './dto/update-reservation-status-id.dto';
import { ReservationStatusId} from './entities/reservation-status-id.entity';

@Injectable()
export class ReservationStatusIdService {

  constructor(
    @InjectRepository(ReservationStatusId) private reservationStatusId: Repository<ReservationStatusId>,    
  ) {}

  create(createReservationStatusIdDto: CreateReservationStatusIdDto) {
    return 'This action adds a new reservationStatusId';
  }

  findAll() {
    return `This action returns all reservationStatusId`;
  }

  async findOne(id: number) {
    const result = await this.reservationStatusId.findOne(id);
    return {
      data: result
    }
  }

  update(id: number, updateReservationStatusIdDto: UpdateReservationStatusIdDto) {
    return `This action updates a #${id} reservationStatusId`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationStatusId`;
  }
}
