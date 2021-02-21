import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../entities/user.entity';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async updateAvatar(id: number, imgName: string): Promise<any> {

    if (id === 1) {
      throw new InternalServerErrorException();
    }

    try {
      await this.usersRepository.update(id, {avatar: imgName});
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

  }

}
