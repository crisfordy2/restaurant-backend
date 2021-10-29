import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReservationTablesTable1635381791826
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'reservation_tables',
        columns: [
          {
            name: 'reservation_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'table_id',
            type: 'bigint',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['reservation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reservations',
          },
          {
            columnNames: ['table_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tables',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('reservation_tables');
  }
}
