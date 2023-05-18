import { api } from '@/http/interceptors'
import { IUser, IUserDto } from '@/services/types/user.interface'
import { useAuth } from '@/hooks/useAuth'

class UserService {
	async getProfile(userId: number | undefined) {
		return await api.get<IUserDto>('/user/profile',{ params: { id: userId }})
	}

	async getMostPopular() {
		return await api.get<IUser[]>('/user/popular')
	}

	async updateProfile(userId: number | undefined, body: IUser) {
		return await api.patch<IUser>(`/user/profile?id=${userId}`, body);
	}
}

const userService = new UserService();
export default userService
