import {
	Column,
	CreateDateColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';
import { User } from '../user/user.entity';
import { Video } from '../video/video.entity';

export class Comment {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column()
	message: string;

	// @ManyToOne(() => User, (user) => user.comments, { nullable: true })
	// user?: User;
	//
	// @ManyToOne(() => Video, (video) => video.comments, { nullable: true })
	// video?: Video;
}
