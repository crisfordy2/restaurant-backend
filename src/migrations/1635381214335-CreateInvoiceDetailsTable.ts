import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInvoiceDetailsTable1635381214335
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'invoice_details',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'invoice_id',
            type: 'bigint',
          },
          {
            name: 'order_item_id',
            type: 'bigint',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['invoice_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'invoices',
          },
          {
            columnNames: ['order_item_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'order_items',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('invoice_details');
  }
}
