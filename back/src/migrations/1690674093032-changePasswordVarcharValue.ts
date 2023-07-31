import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePasswordVarcharValue1690674093032 implements MigrationInterface {
    name = 'ChangePasswordVarcharValue1690674093032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(30) NOT NULL`);
    }

}
