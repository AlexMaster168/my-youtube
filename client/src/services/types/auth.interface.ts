export interface IAuthData {
	user: {
		id: string
		email: string
	} | null
	accessToken: string
}
