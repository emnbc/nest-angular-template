import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AuthModule } from './rest/auth/auth.module';
import { UsersModule } from './rest/users/users.module';
import { ProfileModule } from './rest/profile/profile.module';
import { AppController } from './app.controller';
import { configuration } from './config/configuration';
import { DatabaseConfig } from './config/db.config';
import { StaticConfig } from './config/static.config';
import { mailConfig } from './config/mail.config';
import { QuerySelectingMiddleware } from './middleware/qs.middleware';

import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot(mailConfig),
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ServeStaticModule.forRootAsync({ imports: [ConfigModule], useClass: StaticConfig }),
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], useClass: DatabaseConfig }),
    AuthModule,
    UsersModule,
    ProfileModule
  ],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(QuerySelectingMiddleware)
      .forRoutes('users');
  }
}
