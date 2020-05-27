import { Controller, Get, UseGuards, Post, Req } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { User } from 'src/entities/user.entity';
import { UsersService } from '../rest/users/users.service';

@Controller()
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/me')
  getProfile(@Req() req: Request) {
    return this.usersService.findOne((req.user as User).id);
  }

}