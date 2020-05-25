import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './rest/messages/messages.module';
import { UsersModule } from './rest/users/users.module';
import { AppController } from './app.controller';
import { config } from './config';

@Module({
  imports: [
    ServeStaticModule.forRoot(config.static),
    TypeOrmModule.forRoot({...config.db, entities: [User, Message]}),
    AuthModule,
    MessagesModule,
    UsersModule
  ],
  controllers: [AppController]
})
export class AppModule {}
