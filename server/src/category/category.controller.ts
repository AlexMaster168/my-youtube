import { Controller, Delete, Get, HttpCode, Post } from '@nestjs/common'
import { CategoryService } from './category.service'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {
	}

	@HttpCode(200)
	@Post()
	async create(name: string) {
		return await this.categoryService.createCategory(name)
	}

	@HttpCode(200)
	@Get()
	async getAll() {
		return await this.categoryService.getAll()
	}

	@HttpCode(200)
	@Delete()
	async delete(id: number) {
    return await this.categoryService.deleteCategory(id)
	}
}
