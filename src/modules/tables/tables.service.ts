import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TablesService {

  constructor(
    @InjectRepository(Table) private tableRepository: Repository<Table>,
  ) {}


  create(createTableDto: CreateTableDto) {
    return 'This action adds a new table';
  }

  findAll() {
    return `This action returns all tables`;
  }

  async findOne(id: number) {
    const result = await this.tableRepository.findOne(id);
    return {
      data: result
    }
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
