import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderItemsTable1635379593878 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'order_items',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'order_id',
            type: 'bigint',
          },
          {
            name: 'dish_id',
            type: 'bigint',
          },
          {
            name: 'quantity',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
          },
          {
            columnNames: ['dish_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'dishes',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('order_items');
  }
}
