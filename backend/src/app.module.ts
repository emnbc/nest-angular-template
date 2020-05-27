import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './rest/users/users.module';
import { AppController } from './app.controller';
import { configuration } from './config/configuration';
import { DatabaseConfig } from './config/db.config';
import { StaticConfig } from './config/static.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useClass: StaticConfig
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController]
})
export class AppModule {}
