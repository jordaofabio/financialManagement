import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateRegisters1646798682200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'registers',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'category_id',
                type: 'uuid',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'value',
                type: 'float',
              },
              {
                name: 'type',
                type: 'int',
              },
              {
                name: 'date',
                type: 'timestamp',
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
          }),
        );

        await queryRunner.createForeignKey("registers", new TableForeignKey({
          columnNames: ["category_id"],
          referencedColumnNames: ["id"],
          referencedTableName: "categories",
          onDelete: "SET NULL"
        }));
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registers');
      }

}
