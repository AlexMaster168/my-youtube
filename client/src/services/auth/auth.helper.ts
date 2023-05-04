import Cookies from 'js-cookie'

export interface IAuthData {
	user: {
		id: string
		email: string
	} | null
	accessToken: string
}
export const saveTokenToStorage = (accessToken: string) => {
	Cookies.set('accessToken', accessToken)
}

export const removeTokenFromStorage = () => {
	Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthData) => {
	alert('Пользователь успешно вошёл в систему')
	saveTokenToStorage(data.accessToken)
	localStorage.setItem('user', JSON.stringify(data.user))
}
