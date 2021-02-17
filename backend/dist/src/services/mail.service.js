"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let MailService = (() => {
    let MailService = class MailService {
        constructor(mailerService) {
            this.mailerService = mailerService;
        }
        send(userData) {
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
                .then(() => { })
                .catch(() => { });
        }
    };
    MailService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [mailer_1.MailerService])
    ], MailService);
    return MailService;
})();
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map