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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("@nestjs/platform-express/multer");
const multer_2 = require("multer");
const path_1 = require("path");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const profile_service_1 = require("./profile.service");
const shared_utils_1 = require("../../utils/shared-utils");
let ProfileController = (() => {
    let ProfileController = class ProfileController {
        constructor(profileService) {
            this.profileService = profileService;
        }
        async uploadFile(file, req) {
            await this.profileService.updateAvatar(req.user.id, file.filename);
            return {
                fileName: file.filename,
                mimetype: file.mimetype
            };
        }
    };
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post('upload'),
        common_1.UseInterceptors(multer_1.FileInterceptor('file', {
            storage: multer_2.diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    cb(null, shared_utils_1.randomName() + path_1.extname(file.originalname));
                }
            })
        })),
        __param(0, common_1.UploadedFile()), __param(1, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ProfileController.prototype, "uploadFile", null);
    ProfileController = __decorate([
        common_1.Controller('profile'),
        __metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], ProfileController);
    return ProfileController;
})();
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map