import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReservationStatusesTable1635381557844
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'reservation_statuses',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '50',  
          },
          {
            name: 'is_active',
            type: 'bool',
            default: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('reservation_statuses');
  }
}
