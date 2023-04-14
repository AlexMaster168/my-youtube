import {
	Column,
	CreateDateColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { UserModel } from '../user/user.model';
import { CommentModel } from '../comment/comment.model';

export class VideoModel {
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

	@ManyToOne(() => UserModel, (user) => user.videos)
	user: UserModel;

	@OneToMany(() => CommentModel, (comment) => comment.video)
	comments?: CommentModel[];
}
