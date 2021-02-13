import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { MailModule } from '../../mailer/mail.module';

@Module({
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([User]), MailModule],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
