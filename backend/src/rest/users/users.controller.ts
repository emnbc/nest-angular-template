import { Body, Controller, Delete, Get, Param, Post, UseGuards, Req, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { QueryResultInterceptor } from '../../interceptors/qr.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
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

  // @UseGuards(JwtAuthGuard)
  // @Get()
  // async findAll(@Req() req: Request, @Res() res: Response): Promise<void> {
  //   res.set('rwerw', 'sdfsd');
  //   res.send(await this.usersService.findAll(req.qs));
  // }

}