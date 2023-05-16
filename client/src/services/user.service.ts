import { api } from '@/http/interceptors'
import { IUser } from '@/services/types/user.interface'

export const UserService = {
	async getProfile(email: string, password: string) {
		try {
			const response = await api.get<IUser>('user/profile', {})

		} catch (err) {
			throw new Error()
		}
	},
}
