import { MailService } from '../../mailer/mail.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/create-user.dto';
import { EditUserDto } from '../../dto/edit-user.dto';
import { User } from '../../entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    private mail;
    constructor(usersRepository: Repository<User>, mail: MailService);
    create(userData: CreateUserDto): Promise<any>;
    update(id: number, userData: EditUserDto): Promise<any>;
    findAll(qs: QuerySelecting): Promise<QueryResult>;
    findOne(id: number): Promise<User>;
    findUser(username: string): Promise<User>;
    remove(id: number): Promise<void>;
}
