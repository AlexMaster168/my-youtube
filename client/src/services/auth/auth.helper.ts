import Cookies from 'js-cookie'
import { IAuthData } from '@/services/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'


export const saveTokenToStorage = (accessToken: string) => {
	Cookies.set('accessToken', accessToken)
}

export const removeTokenFromStorage = () => {
	Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthData) => {
	saveTokenToStorage(data.accessToken)
	localStorage.setItem('user', JSON.stringify(data.user))
}
