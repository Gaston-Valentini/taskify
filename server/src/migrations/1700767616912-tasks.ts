import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Tasks1700767616912 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "userId",
                        type: "int",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "500",
                        default: "''",
                    },
                    {
                        name: "urgency",
                        type: "enum",
                        enum: ["low", "medium", "high"],
                    },
                    {
                        name: "category",
                        type: "enum",
                        enum: [
                            "work",
                            "personal",
                            "study",
                            "health",
                            "entertainment",
                            "finance",
                            "projects",
                            "buy",
                            "events",
                        ],
                    },
                    {
                        name: "completed",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["userId"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks");
    }
}
