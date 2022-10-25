import { MigrationInterface, QueryRunner } from "typeorm";

export class createBuyEntity1651674679899 implements MigrationInterface {
    name = 'createBuyEntity1651674679899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "buy" ("id" uuid NOT NULL, "total" double precision NOT NULL, "userId" uuid, CONSTRAINT "PK_634c4687b54f6a44ac0c142adf7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buy_products_product" ("buyId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_436080770c60352a2023667f456" PRIMARY KEY ("buyId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_65c27917774c9df0d3d2fb929d" ON "buy_products_product" ("buyId") `);
        await queryRunner.query(`CREATE INDEX "IDX_210c90379be266d3c64d71f603" ON "buy_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "buy" ADD CONSTRAINT "FK_73b6d9b1037a714d3314e038819" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "buy_products_product" ADD CONSTRAINT "FK_65c27917774c9df0d3d2fb929d9" FOREIGN KEY ("buyId") REFERENCES "buy"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buy_products_product" ADD CONSTRAINT "FK_210c90379be266d3c64d71f6038" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buy_products_product" DROP CONSTRAINT "FK_210c90379be266d3c64d71f6038"`);
        await queryRunner.query(`ALTER TABLE "buy_products_product" DROP CONSTRAINT "FK_65c27917774c9df0d3d2fb929d9"`);
        await queryRunner.query(`ALTER TABLE "buy" DROP CONSTRAINT "FK_73b6d9b1037a714d3314e038819"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_210c90379be266d3c64d71f603"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_65c27917774c9df0d3d2fb929d"`);
        await queryRunner.query(`DROP TABLE "buy_products_product"`);
        await queryRunner.query(`DROP TABLE "buy"`);
    }

}
