import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTypesModule } from './modules/user-types/user-types.module';
import { UsersModule } from './modules/users/users.module';

import appConfig from './core/config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      load: [appConfig],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      database: process.env.DB_NAME || '',
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || '',
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: false,
      migrationsTableName: 'migrations',
      migrations: [`${__dirname}/../migrations/**/*{.ts,.js}`],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    UserTypesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
