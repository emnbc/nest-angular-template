"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const auth_service_1 = require("./auth.service");
const users_module_1 = require("../users/users.module");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
const auth_controller_1 = require("./auth.controller");
let AuthModule = (() => {
    let AuthModule = class AuthModule {
    };
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                jwt_1.JwtModule.registerAsync({
                    imports: [config_1.ConfigModule],
                    useFactory: async (configService) => ({ secret: configService.get('secret') }),
                    inject: [config_1.ConfigService]
                }),
                users_module_1.UsersModule,
                passport_1.PassportModule
            ],
            providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
            exports: [auth_service_1.AuthService],
            controllers: [auth_controller_1.AuthController]
        })
    ], AuthModule);
    return AuthModule;
})();
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map