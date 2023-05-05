import {
	Column,
	CreateDateColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity';

export class Video {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column()
	name: string;

	@Column()
	isPublic: boolean;

	@Column({ default: 0 })
	views?: number;

	@Column({ default: 0 })
	like?: number;

	@Column({ default: 0 })
	dislike?: number;

	@Column()
	description: string;

	@Column()
	videoPath: string;

	@Column()
	thumbnailPath: string;

	// @ManyToOne(() => User, (user) => user.videos, { nullable: true })
	// users: User;
	//
	// @OneToMany(() => Comment, (comment) => comment.video, { nullable: true })
	// comments?: Comment[];
}
