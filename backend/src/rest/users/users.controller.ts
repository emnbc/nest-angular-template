import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Req, Res, ParseIntPipe, UseInterceptors, Header } from '@nestjs/common';
import { Request, Response } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from '../../dto/create-user.dto';
import { EditUserDto } from '../../dto/edit-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { QueryResultInterceptor } from '../../interceptors/qr.interceptor';
import { ExcelService } from '../../services/excel.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly excel: ExcelService
  ) { }

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

  @UseGuards(JwtAuthGuard)
  @Get('/download/run')
	@Header('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
	async download(@Res() res: Response): Promise<any> {
		return await this.excel.xlsList(res);
	}
}