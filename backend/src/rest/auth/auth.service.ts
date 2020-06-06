import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findUser(username);
        const isValid = user ? await user.comparePassword(pass) : false;
        if (user && isValid) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, id: user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

}
