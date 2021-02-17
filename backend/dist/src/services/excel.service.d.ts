import { Response } from 'express';
import { UsersService } from '../rest/users/users.service';
export declare class ExcelService {
    private usersService;
    constructor(usersService: UsersService);
    xlsList(res: Response): Promise<void>;
}
