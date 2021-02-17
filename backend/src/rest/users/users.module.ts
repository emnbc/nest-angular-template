import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { MailService } from '../../services/mail.service';
import { ExcelService } from '../../services/excel.service';

@Module({
  providers: [UsersService, ExcelService, MailService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
