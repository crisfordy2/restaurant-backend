import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateOrderTypeDto } from '~modules/order-types/dto/create-order-type.dto';

export class InsertOrderTypes1635641409201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const types: CreateOrderTypeDto[] = [
      {
        description: 'Deliver',
      },
      {
        description: 'In place',
      },
      {
        description: 'To take away',
      },
    ];
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('order_types')
      .values(types)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
