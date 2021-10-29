import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1635378009518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_type_id',
            type: 'bigint',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'lastname',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'phonenumber',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'identification',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'is_active',
            type: 'bool',
            default: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_type_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user_types',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('users');
  }
}
