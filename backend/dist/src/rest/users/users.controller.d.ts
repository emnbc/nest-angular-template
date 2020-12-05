import { Request } from 'express';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: CreateUserDto): Promise<User>;
    findAll(req: Request): Promise<any>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<void>;
}
