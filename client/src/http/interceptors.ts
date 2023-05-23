import axios from 'axios'
import Cookies from 'js-cookie'

export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const API_URL = `${process.env.SERVER_PORT}`

export const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: getContentType()
})

api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`
	return config
})

export const $api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
	headers: getContentType()
})


$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`
	return config
})

$api.interceptors.response.use(
	(config) => {
		return config
	},
	async (error) => {
		const originalRequest = error.config
		if (
			error.response &&
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const response = await axios.get(`${API_URL}/refresh`, {
					withCredentials: true
				})
				Cookies.set('accessToken', response.data.accessToken)
				return $api.request(originalRequest)
			} catch (e) {
				console.log('НЕ АВТОРИЗОВАН')
			}
		}
		throw error
	}
)

export default $api
