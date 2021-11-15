import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReservationsTable1635381567032
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'reservations',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'customer_id',
            type: 'bigint',
          },
          {
            name: 'reservation_status_id',
            type: 'bigint',
          },
          {
            name: 'reservation_date',
            type: 'date',
          },
          {
            name: 'hour_date',
            type: 'bigint'
          }
        ],
        foreignKeys: [
          {
            columnNames: ['customer_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
          {
            columnNames: ['reservation_status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reservation_statuses',
          },  
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('reservations');
  }
}
