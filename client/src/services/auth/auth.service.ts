import {
	IAuthData,
	removeTokenFromStorage,
	saveToStorage
} from '@/services/auth/auth.helper'
import $api from '@/http/interceptors'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await $api.post<IAuthData>('auth/login', {
			email,
			password
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},
	async register(email: string, name: string, password: string) {
		const response = await $api.post<IAuthData>('auth/register', {
			email,
			name,
			password
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},
	logout() {
		removeTokenFromStorage()
		localStorage.removeItem('user')
	}
}
