import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordColunm1690663062676 implements MigrationInterface {
    name = 'AddPasswordColunm1690663062676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    }

}
