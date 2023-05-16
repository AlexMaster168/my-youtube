import {
	removeTokenFromStorage,
	saveToStorage
} from '@/services/auth/auth.helper'
import $api from '@/http/interceptors'
import { IAuthData } from '@/services/types/auth.interface'

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
	async register(email: string, name: string, password: string) {
		try {
			const response = await $api.post<IAuthData>('auth/register', {
				email,
				name,
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
	}
}
