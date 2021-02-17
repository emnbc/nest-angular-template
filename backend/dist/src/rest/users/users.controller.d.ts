import { Request, Response } from 'express';
import { CreateUserDto } from '../../dto/create-user.dto';
import { EditUserDto } from '../../dto/edit-user.dto';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';
import { ExcelService } from '../../services/excel.service';
export declare class UsersController {
    private readonly usersService;
    private excel;
    constructor(usersService: UsersService, excel: ExcelService);
    create(userData: CreateUserDto): Promise<User>;
    update(id: number, userData: EditUserDto): Promise<any>;
    findAll(req: Request): Promise<any>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<void>;
    download(res: Response): Promise<any>;
}
