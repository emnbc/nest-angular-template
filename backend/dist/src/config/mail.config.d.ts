import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
export declare const mailConfig: {
    transport: {
        host: string;
        port: number;
        auth: {
            user: string;
            pass: string;
        };
    };
    defaults: {
        from: string;
    };
    template: {
        dir: string;
        adapter: HandlebarsAdapter;
        options: {
            strict: boolean;
        };
    };
};
