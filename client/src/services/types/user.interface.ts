
export interface IUser {
	id: number | undefined,
	email?: string,
	name: string,
	avatarPath: string,
	description: string,
	location: string,
	subscribersCount?: number,
	videosCount?: number
}

export interface IUserDto {
	user_avatarPath: string,
	user_description: string,
	user_location: string,
	user_email: string,
	user_name: string,
	user_subscribersCount: number,
	videosCount?: number
}
