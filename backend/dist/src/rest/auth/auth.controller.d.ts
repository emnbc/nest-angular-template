import { Request } from 'express';
import { AuthService } from './auth.service';
import { User } from '../../entities/user.entity';
import { UsersService } from '../users/users.service';
export declare class AuthController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: Request): Promise<{
        accessToken: string;
    }>;
    getProfile(req: Request): Promise<User>;
}
