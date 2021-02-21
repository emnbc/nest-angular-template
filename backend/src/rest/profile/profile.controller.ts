import { Controller, UseGuards, UseInterceptors, Post, UploadedFile, Body, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer'
import { extname } from 'path'
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProfileService } from './profile.service';
import { User } from '../../entities/user.entity';
import { randomName } from '../../utils/shared-utils';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService,) { }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, randomName() + extname(file.originalname));
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    await this.profileService.updateAvatar((req.user as User).id, file.filename)
    return {
      fileName: file.filename,
      mimetype: file.mimetype
    };
  }

}