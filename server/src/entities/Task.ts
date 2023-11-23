import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

import { User } from "./User";

@Entity("tasks")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: number;

    @Column()
    name!: string;

    @Column({ default: "" })
    description!: string;

    @Column()
    urgency!: string;

    @Column()
    category!: string;

    @Column()
    completed!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({ name: "userId" })
    user!: User;
}
