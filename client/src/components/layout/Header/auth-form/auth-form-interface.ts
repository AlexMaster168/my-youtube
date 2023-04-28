export interface IAuthField {
	name?: string
	email: string
	password: string
}

export const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
