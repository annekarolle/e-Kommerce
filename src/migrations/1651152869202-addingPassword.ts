import { MigrationInterface, QueryRunner } from "typeorm";

export class addingPassword1651152869202 implements MigrationInterface {
    name = 'addingPassword1651152869202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
