import { api } from '@/http/interceptors'
import { ICategory, ICategoryDto } from '@/services/types/category.interface'

class CategoryService {
	async getAll() {
		return await api.get<ICategory[]>(`/category`)
	}

	async createCategory(name: ICategoryDto) {
		return await api.post<ICategory>(`/category`, name)
	}

	async deleteCategory(id: number | undefined) {
		return await api.post<ICategory>(`/category/${id}`)
	}
}

const categoryService = new CategoryService()
export default categoryService
