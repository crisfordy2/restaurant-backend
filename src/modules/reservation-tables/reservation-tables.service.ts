import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateReservationTableDto } from './dto/create-reservation-table.dto';
import { UpdateReservationTableDto } from './dto/update-reservation-table.dto';
import { ReservationTable } from './entities/reservation-table.entity';
import { ReservationsService } from '~modules/reservations/reservations.service';
import { TablesService } from '~modules/tables/tables.service';

@Injectable()
export class ReservationTablesService {

  constructor(
    @InjectRepository(ReservationTable) private reservationTableRepository: Repository<ReservationTable>,
    private reservationsService: ReservationsService, private tablesService: TablesService,
  ) {}

  async create(createReservationTableDto: CreateReservationTableDto) {
    
    const { data: reservationsService } = await this.reservationsService.findOne(
      createReservationTableDto.reservation_id
    );  

    const { data: tablesService } = await this.tablesService.findOne(
      createReservationTableDto.table_id
    ); 

    const reserTable = this.reservationTableRepository.create();    
    reserTable.reservation = reservationsService;
    reserTable.table = tablesService;    

    return await this.reservationTableRepository.save(reserTable);
  }

  async findAll() {
    const info = await this.reservationTableRepository.find({      
      relations: ["reservation", "table" , "reservation.customer", "reservation.reservation_status"]
    });
    console.log("info", info)
    return info;
  }

  async findAll2(dia:Date, hora:number) {
    console.log("dia-hora", dia, hora);
    const info = await this.reservationTableRepository.find({    
      relations: ["reservation", "table" , "reservation.customer", "reservation.reservation_status"]
    });

    let result = [];

    info.forEach(element => {
      if(element.reservation.reservation_date == dia && element.reservation.hour_date == hora) result.push(element);  
    });

    console.log("info", result)
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservationTable`;
  }

  update(id: number, updateReservationTableDto: UpdateReservationTableDto) {
    return `This action updates a #${id} reservationTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationTable`;
  }
}
