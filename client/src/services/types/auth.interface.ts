export interface IAuthData {
	user: {
		id: number
		email: string
	} | null
	accessToken: string
}

export interface IAuthPassword {
	email: string,
	password: string,
	phone: string
}
