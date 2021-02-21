import {MigrationInterface, QueryRunner} from "typeorm";

export class userAvatar1613716762359 implements MigrationInterface {
    name = 'userAvatar1613716762359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "avatar" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "avatar"`);
    }

}
