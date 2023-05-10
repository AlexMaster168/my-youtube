import { Controller, Delete, Get, HttpCode, Post } from '@nestjs/common'
import { CategoryService } from './category.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { Roles } from '../user/decorators/roles.decorator'
import { UserRole } from '../user/user.entity'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {
	}

	@HttpCode(200)
	@Post()
  @Auth()
	@Roles(UserRole.Admin)
	async createCategory(name: string) {
		return await this.categoryService.create(name)
	}

	@HttpCode(200)
	@Get()
	async getAll() {
		return await this.categoryService.getAll()
	}

	@HttpCode(200)
	@Delete()
	@Auth()
	@Roles(UserRole.Admin)
	async deleteCategory(id: number) {
    return await this.categoryService.delete(id)
	}
}
