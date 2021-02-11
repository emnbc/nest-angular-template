import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AuthModule } from './rest/auth/auth.module';
import { UsersModule } from './rest/users/users.module';
import { AppController } from './app.controller';
import { configuration } from './config/configuration';
import { DatabaseConfig } from './config/db.config';
import { StaticConfig } from './config/static.config';
import { QuerySelectingMiddleware } from './middleware/qs.middleware';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.ethereal.email",
        port: 587,
        auth: { user: "elias53@ethereal.email", pass: "JKQy7ydZUjMfNBstF9" },
      },
      defaults: {
        from:'"nest-modules" <elias53@ethereal.email>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ServeStaticModule.forRootAsync({ imports: [ConfigModule], useClass: StaticConfig }),
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], useClass: DatabaseConfig }),
    AuthModule,
    UsersModule
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
