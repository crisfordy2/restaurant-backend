import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationTablesService } from './reservation-tables.service';
import { CreateReservationTableDto } from './dto/create-reservation-table.dto';
import { UpdateReservationTableDto } from './dto/update-reservation-table.dto';

@Controller('reservation-tables')
export class ReservationTablesController {
  constructor(private readonly reservationTablesService: ReservationTablesService) {}

  @Post()
  create(@Body() createReservationTableDto: CreateReservationTableDto) {
    return this.reservationTablesService.create(createReservationTableDto);
  }

  @Get()
  findAll() {
    return this.reservationTablesService.findAll();
  }

  @Get(':dia/:hora')
  findAll2(@Param() params) {
    return this.reservationTablesService.findAll2(params.dia,params.hora);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationTablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationTableDto: UpdateReservationTableDto) {
    return this.reservationTablesService.update(+id, updateReservationTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationTablesService.remove(+id);
  }
}
