import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPasswordColumnToUsersTable1636905174192
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    (await queryRunner.getTable('users')).addColumn(
      new TableColumn({
        name: 'password',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password');
  }
}
