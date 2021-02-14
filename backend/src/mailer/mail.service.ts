import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

interface UserEmail {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  
  public send(userData: UserEmail): void {
    this.mailerService.sendMail({
      to: userData.email,
      from: 'noreply@emnbc.com',
      subject: 'Welcome to EMNBC',
      template: 'welcome',
      context: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        username: userData.username,
      },
    })
    .then(() => {})
    .catch(() => {});
  }
}