import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
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
}

export = config;
