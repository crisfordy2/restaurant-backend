import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablesTable1635378811223 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'tables',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'desription',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'capability',
            type: 'integer',
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
    queryRunner.dropTable('tables');
  }
}
