import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserTypesModule } from '~modules/user-types/user-types.module';
import { UsersModule } from '~modules/users/users.module';
import { OrderTypesModule } from './modules/order-types/order-types.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderStatusesModule } from './modules/order-statuses/order-statuses.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { ReservationTablesModule } from './modules/reservation-tables/reservation-tables.module';
import { TablesModule } from './modules/tables/tables.module';
import { ReservationStatusIdModule } from './modules/reservation-status-id/reservation-status-id.module';
import { AuthModule } from './modules/auth/auth.module';

import appConfig from '~core/config/app.config';

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
      migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    UserTypesModule,
    UsersModule,
    OrderTypesModule,
    OrdersModule,
    OrderStatusesModule,
    ReservationsModule,
    ReservationTablesModule,
    TablesModule,
    ReservationStatusIdModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
