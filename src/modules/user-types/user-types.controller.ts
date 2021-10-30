import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ResponseInterceptor } from '~core/interceptors/response.interceptor';
import { UserTypesService } from './user-types.service';

@UseInterceptors(ResponseInterceptor)
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
