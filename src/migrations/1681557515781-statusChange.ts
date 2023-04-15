import { MigrationInterface, QueryRunner } from "typeorm";

export class StatusChange1681557515781 implements MigrationInterface {
    name = 'StatusChange1681557515781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imovel" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "imovel" ADD "status" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imovel" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "imovel" ADD "status" boolean NOT NULL`);
    }

}
