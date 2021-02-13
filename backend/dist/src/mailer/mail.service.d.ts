import { MailerService } from '@nestjs-modules/mailer';
interface UserEmail {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
}
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    send(userData: UserEmail): void;
}
export {};
