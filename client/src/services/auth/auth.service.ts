import {
	removeTokenFromStorage,
	saveToStorage
} from '@/services/auth/auth.helper'
import $api, { api } from '@/http/interceptors'
import { IAuthData, IAuthPassword } from '@/services/types/auth.interface'

export const AuthService = {
	async login(email: string, password: string) {
		try {
			const response = await $api.post<IAuthData>('auth/login', {
				email,
				password
			})
			if (response.data.accessToken) saveToStorage(response.data)
			return response.data
		} catch (err) {
			throw new Error()
		}
	},
	async register(email: string, name: string, phone: string, password: string) {
		try {
			const response = await $api.post<IAuthData>('auth/register', {
				email,
				name,
				phone,
				password
			})
			if (response.data.accessToken) saveToStorage(response.data)
			return response.data
		} catch (err) {
			throw new Error()
		}
	},
	logout() {
		removeTokenFromStorage()
		localStorage.removeItem('user')
	},

	async forgotPassword(email: string, phone: string, password: string) {
		const response = await api.patch<IAuthPassword>('auth/forgot', { email, phone, password })
		return response.data
	}
}
