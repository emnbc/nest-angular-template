"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAvatar1613716762359 = void 0;
class userAvatar1613716762359 {
    constructor() {
        this.name = 'userAvatar1613716762359';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "avatar" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "avatar"`);
    }
}
exports.userAvatar1613716762359 = userAvatar1613716762359;
//# sourceMappingURL=1613716762359-user_avatar.js.map