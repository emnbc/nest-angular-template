import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Req, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from '../../dto/create-user.dto';
import { EditUserDto } from '../../dto/edit-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { QueryResultInterceptor } from '../../interceptors/qr.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: CreateUserDto): Promise<User> {
    return this.usersService.create(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() userData: EditUserDto) {
    return this.usersService.update(id, userData);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(QueryResultInterceptor)
  @Get()
  findAll(@Req() req: Request): Promise<any> {
    return this.usersService.findAll(req.qs);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usersService.remove(id);
  }

}