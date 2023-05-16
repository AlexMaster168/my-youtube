export interface IUser {
	id: number,
	email: string,
  createdAt: string,
	updatedAt: string,
	name: string,
	avatarPath: string,
	location: string,
	subscribersCount: number,
	videosCount?: number
}
