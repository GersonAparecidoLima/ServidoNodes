import { MigrationInterface, QueryRunner } from "typeorm";

export class Loja1712184344690 implements MigrationInterface {
    name = 'Loja1712184344690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "senha" varchar)`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "telefone" varchar NOT NULL, "email" varchar NOT NULL, "usuarioId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_cliente" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "telefone" varchar NOT NULL, "email" varchar NOT NULL, "usuarioId" integer, CONSTRAINT "FK_26eb6132b607fd16d904df0367d" FOREIGN KEY ("usuarioId") REFERENCES "usuario" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_cliente"("id", "nome", "cpf", "telefone", "email", "usuarioId") SELECT "id", "nome", "cpf", "telefone", "email", "usuarioId" FROM "cliente"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`ALTER TABLE "temporary_cliente" RENAME TO "cliente"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" RENAME TO "temporary_cliente"`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "cpf" varchar NOT NULL, "telefone" varchar NOT NULL, "email" varchar NOT NULL, "usuarioId" integer)`);
        await queryRunner.query(`INSERT INTO "cliente"("id", "nome", "cpf", "telefone", "email", "usuarioId") SELECT "id", "nome", "cpf", "telefone", "email", "usuarioId" FROM "temporary_cliente"`);
        await queryRunner.query(`DROP TABLE "temporary_cliente"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
