import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    user.birthDate = createUserDto.birthDate;

    return this.usersRepository.save(user);
  }

  async findAll(qs: QuerySelecting): Promise<QueryRusult> {
    return {
      count: await this.usersRepository.count({ ...qs.where }),
      result: await this.usersRepository.find({ ...qs })
    };
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findUser(username: string): Promise<User> {
    return this.usersRepository.createQueryBuilder("user")
        .where("user.username = :username", { username: username })
        .addSelect("user.password")
        .getOne();
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
