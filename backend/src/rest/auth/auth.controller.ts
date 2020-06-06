import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { User } from '../../entities/user.entity';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req: Request) {
    return this.usersService.findOne((req.user as User).id);
  }

}