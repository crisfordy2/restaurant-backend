import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { CreateUserTypeDto } from './dto/create-user-type.dto';

@Controller('user-types')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypesService) {}

  @Get()
  findAll() {
    return this.userTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTypesService.findOne(+id);
  }
}
