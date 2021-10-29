import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrdersTable1635379415670 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'order_type_id',
            type: 'bigint',
          },
          {
            name: 'order_status_id',
            type: 'bigint',
          },
          {
            name: 'order_date',
            type: 'date',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['order_type_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'order_types',
          },
          {
            columnNames: ['order_status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'order_statuses',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('orders');
  }
}
