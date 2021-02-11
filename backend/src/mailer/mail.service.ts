import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  
  public send(): void {
    this.mailerService.sendMail({
      to: 'elias53@ethereal.email', // list of receivers
      from: 'elias53@ethereal.email', // sender address
      subject: 'Testing Nest MailerModule ✔', // Subject line
      text: 'welcome', // plaintext body
      html: '<b>welcome</b>', // HTML body content
    }).then(() => {}).catch(() => {});
  }
  
}