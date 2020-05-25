import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreateMessageDto } from '../../dto/create-message.dto';
import { Message } from '../../entities/message.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messagesRepository: Repository<Message>,
        private usersService: UsersService
    ) { }

    async create(createMessageDto: CreateMessageDto, userId: number): Promise<Message> {
        const message = new Message();

        message.text = createMessageDto.text;
        message.date = createMessageDto.date;
        message.user = await this.usersService.findOne(userId);
    
        return this.messagesRepository.save(message);
    }

    async findAll(): Promise<Message[]> {
        console.log(await this.messagesRepository.count());
        // return this.messagesRepository.find({ relations: ["user"]});
        return this.messagesRepository.createQueryBuilder("message")
            .leftJoinAndSelect("message.user", "user")
            .getMany();
    }

}
