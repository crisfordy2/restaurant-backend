import { CreateUserTypeDto } from 'src/modules/user-types/dto/create-user-type.dto';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertUserTypes1635616578747 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userTypes: CreateUserTypeDto[] = [
      {
        description: 'admin',
      },
      {
        description: 'waiter',
      },
      {
        description: 'cashier',
      },
      {
        description: 'chef',
      },
    ];
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('user_types')
      .values(userTypes)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
