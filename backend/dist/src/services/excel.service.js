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
exports.ExcelService = void 0;
const common_1 = require("@nestjs/common");
const Excel = require("exceljs");
const users_service_1 = require("../rest/users/users.service");
let ExcelService = (() => {
    let ExcelService = class ExcelService {
        constructor(usersService) {
            this.usersService = usersService;
        }
        async xlsList(res) {
            const users = await this.usersService.findAll({ take: 1000, skip: 0, where: {}, order: { id: 'ASC' } });
            const workbook = new Excel.Workbook();
            const worksheet = workbook.addWorksheet("Users");
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 8 },
                { header: 'First Name', key: 'firstName', width: 24 },
                { header: 'Last Name', key: 'lastName', width: 24 },
                { header: 'Username', key: 'username', width: 24 },
                { header: 'Birth Date', key: 'birthDate', width: 32 },
                { header: 'Email', key: 'email', width: 32 },
                { header: 'Active', key: 'isActive', width: 16 },
            ];
            worksheet.addRows(users.result);
            res.setHeader("Content-Disposition", "attachment; filename=test.xlsx");
            await workbook.xlsx.write(res);
            res.end();
        }
    };
    ExcelService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [users_service_1.UsersService])
    ], ExcelService);
    return ExcelService;
})();
exports.ExcelService = ExcelService;
//# sourceMappingURL=excel.service.js.map