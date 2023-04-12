import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateTables1681303769364 implements MigrationInterface {
    name = 'GenerateTables1681303769364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "contato" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
