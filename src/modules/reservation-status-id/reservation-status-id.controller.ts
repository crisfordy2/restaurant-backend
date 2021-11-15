import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationStatusIdService } from './reservation-status-id.service';
import { CreateReservationStatusIdDto } from './dto/create-reservation-status-id.dto';
import { UpdateReservationStatusIdDto } from './dto/update-reservation-status-id.dto';

@Controller('reservation-status-id')
export class ReservationStatusIdController {
  constructor(private readonly reservationStatusIdService: ReservationStatusIdService) {}

  @Post()
  create(@Body() createReservationStatusIdDto: CreateReservationStatusIdDto) {
    return this.reservationStatusIdService.create(createReservationStatusIdDto);
  }

  @Get()
  findAll() {
    return this.reservationStatusIdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationStatusIdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationStatusIdDto: UpdateReservationStatusIdDto) {
    return this.reservationStatusIdService.update(+id, updateReservationStatusIdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationStatusIdService.remove(+id);
  }
}
