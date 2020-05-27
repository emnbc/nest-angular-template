import {MigrationInterface, QueryRunner} from "typeorm";

export class addUsername1590600574621 implements MigrationInterface {
    name = 'addUsername1590600574621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    }

}
