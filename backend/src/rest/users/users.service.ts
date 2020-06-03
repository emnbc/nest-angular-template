import { Injectable, InternalServerErrorException, ConflictException } from '@nestjs/common';
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

  async create(userData: CreateUserDto): Promise<User> {
    const user = new User();

    user.firstName = userData.firstName;
    user.lastName = userData.lastName;
    user.username = userData.username;
    user.password = userData.password; // TO DO encrypt password
    user.email = userData.email;
    user.birthDate = userData.birthDate;

    try {
      return await this.usersRepository.save(user);
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Username has already been taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async findAll(qs: QuerySelecting): Promise<QueryResult> {
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
