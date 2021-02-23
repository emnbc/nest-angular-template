import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { promisify } from 'util';
import { unlink  } from 'fs';

import { User } from '../../entities/user.entity';

const unlinkPromise = promisify(unlink);

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

    const { avatar } = await this.usersRepository.findOne(id);

    try {
      await this.usersRepository.update(id, {avatar: imgName});
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

    if (avatar) {
      try {
        await unlinkPromise('./uploads/' + avatar);
      } catch (err) {
        throw new InternalServerErrorException(err);
      }
    }

  }

}
