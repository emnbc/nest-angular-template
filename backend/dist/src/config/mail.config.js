"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailConfig = void 0;
require('dotenv').config();
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
exports.mailConfig = {
    transport: {
        host: process.env.MAIL_HOST,
        port: +process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        },
    },
    defaults: {
        from: '"nest-modules" <elias53@ethereal.email>',
    },
    template: {
        dir: process.cwd() + '/templates/',
        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
        options: {
            strict: true,
        },
    },
};
//# sourceMappingURL=mail.config.js.map