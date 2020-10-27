import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateOrphanages1602621948533 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            unsigned: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'latitude',
            type: 'decimal',
            isNullable: false,
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            isNullable: false,
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'instructions',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            isNullable: false,
            default: false,
          },
          {
            name: 'opening_hours',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'whatsapp',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
    )
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('orphanages')
  }
}
