import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTypesTable1635377684201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'user_types',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            type: 'bigint',
          },
          {
            name: 'description',
            isUnique: true,
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
    queryRunner.dropTable('user_types');
  }
}
