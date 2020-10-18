import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1603013566862 implements MigrationInterface {
    name = 'createTables1603013566862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "birthDate" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_c9fc06abaa5bb78fb305634d5e8" UNIQUE ("username"), CONSTRAINT "UQ_29f2028c626b41b115fc93ddf24" UNIQUE ("email"), CONSTRAINT "PK_8e88152c46dcdac7827f32b9267" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."user"`);
    }

}
