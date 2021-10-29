import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInvoicesTable1635381041669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'invoices',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_id',
            type: 'bigint',
          },
          {
            name: 'invoice_status_id',
            type: 'bigint',
          },
          {
            name: 'order_date',
            type: 'date',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
          {
            columnNames: ['invoice_status_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'invoice_statuses',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('invoices');
  }
}
