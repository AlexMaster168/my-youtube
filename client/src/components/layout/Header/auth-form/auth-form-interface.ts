export interface IAuthField {
	name: string
	email: string
	password: string
	phone: string
}

export const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const validPhone = /^\+380\d{9}$/;

