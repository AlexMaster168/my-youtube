import { api } from '@/http/interceptors'
import { IUser, IUserDto, IUserPassword } from '@/services/types/user.interface'

class UserService {
	async getProfile(userId: number | undefined) {
		return await api.get<IUserDto>('/user/profile', { params: { id: userId } })
	}

	async getMostPopular() {
		return await api.get<IUser[]>('/user/popular')
	}

	async updateProfile(userId: number | undefined, body: IUser) {
		return await api.patch<IUser>(`/user/profile?id=${userId}`, body)
	}

	async forgotPassword(email: string, phone: string, password: string) {
		const response = await api.patch('/user/forgot', { email, phone, password })
		return response.data
	}

}

const userService = new UserService()
export default userService
