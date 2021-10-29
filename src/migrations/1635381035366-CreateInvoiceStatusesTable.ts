import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInvoiceStatusesTable1635381035366
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'invoice_statuses',
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
            isUnique: true,
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
    queryRunner.dropTable('invoice_statuses');
  }
}
