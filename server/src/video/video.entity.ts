import {
	Column,
	CreateDateColumn, Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { User as UserEntity } from '../user/user.entity'
import { Comment as CommentEntity } from '../comment/comment.entity'
import { Category as CategoryEntity } from '../category/category.entity'

@Entity('video')
export class Video {
	@PrimaryGeneratedColumn()
	id: number

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@Column()
	name: string

	@Column({ default: false })
	isPublic: boolean

	@Column({ default: 0 })
	views?: number

	@Column({ default: 0 })
	likes?: number

	@Column()
	description: string

	@Column()
	videoPath: string

	@Column()
	thumbnailPath: string

	@ManyToOne(() => UserEntity, user => user.video)
	user: UserEntity

	@OneToMany(() => CommentEntity, comment => comment.video)
	comment?: CommentEntity[]

	@ManyToOne(() => CategoryEntity, category => category.video)
	category: CategoryEntity
}
