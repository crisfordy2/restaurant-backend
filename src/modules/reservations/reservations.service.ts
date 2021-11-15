import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { UsersService } from '~modules/users/users.service';
import { ReservationStatusIdService } from '~modules/reservation-status-id/reservation-status-id.service';

@Injectable()
export class ReservationsService {  

  constructor(
    @InjectRepository(Reservation) private reservationRepository: Repository<Reservation>,
    private usersService: UsersService, private reservationStatusIdService: ReservationStatusIdService
  ) {}

  async create(createReservationDto: CreateReservationDto) {

    const { data: usersService } = await this.usersService.findOne(
      createReservationDto.customer_id
    );  

    const { data: reservationStatusIdService } = await this.reservationStatusIdService.findOne(
      createReservationDto.reservation_status_id
    ); 

    const reser = this.reservationRepository.create(createReservationDto);    
    reser.customer = usersService;
    reser.reservation_status = reservationStatusIdService;    

    return await this.reservationRepository.save(reser);
  }

  async findAll() {
    const info = await this.reservationRepository.find({      
      relations: ["customer", "reservation_status"]
    });
    console.log("info", info)
    return info;
  }

  async findOne(id: number) {
    const result = await this.reservationRepository.findOne(id);
    return {
      data: result
    }
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
