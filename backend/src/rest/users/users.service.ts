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
    user.password = createUserDto.password;
    user.email = createUserDto.email;
    user.birthDate = createUserDto.birthDate;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    console.log(await this.usersRepository.count());
    return this.usersRepository.find();
  }

  async findOne(id: string | number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findUser(email: string): Promise<User> {
    return this.usersRepository.createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .addSelect("user.password")
        .getOne();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
