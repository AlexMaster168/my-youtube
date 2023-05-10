import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from './category.entity'

@Injectable()
export class CategoryService {
	constructor(@InjectRepository(Category)
							private readonly categoryRepo: Repository<Category>) {
	}

	async getAll() {
		return await this.categoryRepo.find({ order: { createdAt: 'DESC' } })
	}

	async createCategory(name: string) {
		const category = this.categoryRepo.create({ name })
		return category.id
	}

	async deleteCategory(id: number) {
		const findCategory = await this.categoryRepo.findOne({ where: { id } })

		if (!findCategory) throw new Error('Category not found')
		return await this.categoryRepo.remove(findCategory)
	}
}
