import { MigrationInterface, QueryRunner } from "typeorm";

export class Cascade1681565144418 implements MigrationInterface {
    name = 'Cascade1681565144418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imovel" DROP CONSTRAINT "FK_4898aa61a813ad3bdf148c769da"`);
        await queryRunner.query(`ALTER TABLE "imovel" ADD CONSTRAINT "FK_4898aa61a813ad3bdf148c769da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imovel" DROP CONSTRAINT "FK_4898aa61a813ad3bdf148c769da"`);
        await queryRunner.query(`ALTER TABLE "imovel" ADD CONSTRAINT "FK_4898aa61a813ad3bdf148c769da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
