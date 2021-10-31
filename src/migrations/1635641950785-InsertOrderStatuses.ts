import { MigrationInterface, QueryRunner } from 'typeorm';
import { CreateOrderStatusDto } from '~modules/order-statuses/dto/create-order-status.dto';

export class InsertOrderStatuses1635641950785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const statuses: CreateOrderStatusDto[] = [
      {
        description: 'Received',
      },
      {
        description: 'In process',
      },
      {
        description: 'Delivered',
      },
      {
        description: 'Payed',
      },
    ];
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('order_statuses')
      .values(statuses)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
