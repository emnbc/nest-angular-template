import { Injectable, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../../dto/create-user.dto';
import { EditUserDto } from '../../dto/edit-user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async create(userData: CreateUserDto): Promise<any> {

    const data: CreateUserDto = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      username: userData.username,
      password: userData.password,
      birthDate: userData.birthDate
    };

    const user = this.usersRepository.create(data);

    try {
      const { password, ...result } = await this.usersRepository.save(user);
      return result;
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Username has already been taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(id: number, userData: EditUserDto): Promise<any> {

    const data: EditUserDto = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      birthDate: userData.birthDate
    };

    if (id === 1) {
      throw new InternalServerErrorException();
    }

    try {
      await this.usersRepository.update(id, data);
      return await this.findOne(id);
    } catch (err) {
      throw new InternalServerErrorException(err);
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
    return this.usersRepository.createQueryBuilder('user')
        .where('user.username = :username', { username: username })
        .addSelect('user.password')
        .getOne();
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
