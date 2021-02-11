"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const auth_module_1 = require("./rest/auth/auth.module");
const users_module_1 = require("./rest/users/users.module");
const app_controller_1 = require("./app.controller");
const configuration_1 = require("./config/configuration");
const db_config_1 = require("./config/db.config");
const static_config_1 = require("./config/static.config");
const qs_middleware_1 = require("./middleware/qs.middleware");
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
let AppModule = (() => {
    let AppModule = class AppModule {
        configure(consumer) {
            consumer
                .apply(qs_middleware_1.QuerySelectingMiddleware)
                .forRoutes('users');
        }
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                mailer_1.MailerModule.forRoot({
                    transport: {
                        host: "smtp.ethereal.email",
                        port: 587,
                        auth: { user: "elias53@ethereal.email", pass: "JKQy7ydZUjMfNBstF9" },
                    },
                    defaults: {
                        from: '"nest-modules" <elias53@ethereal.email>',
                    },
                    template: {
                        dir: __dirname + '/templates',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
                config_1.ConfigModule.forRoot({ isGlobal: true, load: [configuration_1.configuration] }),
                serve_static_1.ServeStaticModule.forRootAsync({ imports: [config_1.ConfigModule], useClass: static_config_1.StaticConfig }),
                typeorm_1.TypeOrmModule.forRootAsync({ imports: [config_1.ConfigModule], useClass: db_config_1.DatabaseConfig }),
                auth_module_1.AuthModule,
                users_module_1.UsersModule
            ],
            controllers: [app_controller_1.AppController]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map