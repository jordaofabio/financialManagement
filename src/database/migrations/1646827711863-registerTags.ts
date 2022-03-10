import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateRegistersTags1646827711863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'registersTags',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'register_id',
                type: 'uuid',
              },
              {
                name: 'tag_id',
                type: 'uuid',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
            foreignKeys: [
              {
                name: "tag",
                columnNames: ["tag_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "tags",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
              },
              {
                name: "register",
                columnNames: ["register_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "registers",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
              },
            ],
          }),
        );
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registersTags');
      }

}
