import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUser1695504722965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: "user",
                columns: [
                    { name: 'id', type: "int", isPrimary: true, generationStrategy: 'uuid' },
                    { name: 'name', type: "varchar" },
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
