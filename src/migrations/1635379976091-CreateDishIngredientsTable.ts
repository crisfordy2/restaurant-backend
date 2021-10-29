import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDishIngredientsTable1635379976091
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dish_ingredients',
        columns: [
          {
            name: 'dish_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'ingredient_id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'is_active',
            type: 'bool',
            default: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['dish_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'dishes',
          },
          {
            columnNames: ['ingredient_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'ingredients',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
