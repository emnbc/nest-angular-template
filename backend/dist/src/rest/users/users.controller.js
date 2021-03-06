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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_user_dto_1 = require("../../dto/create-user.dto");
const edit_user_dto_1 = require("../../dto/edit-user.dto");
const users_service_1 = require("./users.service");
const qr_interceptor_1 = require("../../interceptors/qr.interceptor");
const excel_service_1 = require("../../services/excel.service");
let UsersController = (() => {
    let UsersController = class UsersController {
        constructor(usersService, excel) {
            this.usersService = usersService;
            this.excel = excel;
        }
        create(userData) {
            return this.usersService.create(userData);
        }
        update(id, userData) {
            return this.usersService.update(id, userData);
        }
        findAll(req) {
            return this.usersService.findAll(req.qs);
        }
        findOne(id) {
            return this.usersService.findOne(id);
        }
        remove(id) {
            return this.usersService.remove(id);
        }
        async download(res) {
            return await this.excel.xlsList(res);
        }
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "create", null);
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Put(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, edit_user_dto_1.EditUserDto]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "update", null);
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.UseInterceptors(qr_interceptor_1.QueryResultInterceptor),
        common_1.Get(),
        __param(0, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "findAll", null);
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Get(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "findOne", null);
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Delete(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "remove", null);
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Get('/download/run'),
        common_1.Header('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
        __param(0, common_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "download", null);
    UsersController = __decorate([
        common_1.Controller('users'),
        __metadata("design:paramtypes", [users_service_1.UsersService,
            excel_service_1.ExcelService])
    ], UsersController);
    return UsersController;
})();
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map