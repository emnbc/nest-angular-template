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
    console.log(userData);
    this.mailerService.sendMail({
      to: userData.email,
      from: 'elias53@ethereal.email',
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