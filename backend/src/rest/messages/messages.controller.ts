import { Controller, Post, Body, Req, Get, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { MessagesService } from './messages.service';
import { Message } from '../../entities/message.entity';
import { CreateMessageDto } from '../../dto/create-message.dto';
import { User } from '../../entities/user.entity';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('messages')
export class MessagesController {

    constructor(private readonly messagesService: MessagesService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createMessageDto: CreateMessageDto, @Req() req: Request): Promise<Message> {
      return this.messagesService.create(createMessageDto, (req.user as User).id);
    }
    
    @Get()
    findAll(): Promise<Message[]> {
      return this.messagesService.findAll();
    }
}
