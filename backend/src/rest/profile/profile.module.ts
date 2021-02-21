import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileService],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ProfileController]
})
export class ProfileModule {}
