import { MigrationInterface, QueryRunner } from "typeorm";

export class GenerateTables1681324971971 implements MigrationInterface {
    name = 'GenerateTables1681324971971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "imovel" ("id" uuid NOT NULL, "status" boolean NOT NULL, "image" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "valor_compra" integer NOT NULL, "valor_venda" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "userId" uuid, CONSTRAINT "PK_699a277b17435e95cca6a1a1000" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "contato" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "imovel" ADD CONSTRAINT "FK_4898aa61a813ad3bdf148c769da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imovel" DROP CONSTRAINT "FK_4898aa61a813ad3bdf148c769da"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "imovel"`);
    }

}
