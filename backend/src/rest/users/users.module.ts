import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { MailService } from '../../mailer/mail.service';

@Module({
  providers: [UsersService, MailService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersService, MailService],
  controllers: [UsersController]
})
export class UsersModule {}
