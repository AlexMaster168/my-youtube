export interface ICategory {
	  id: number,
		name : string,
		video: string,
		createdAt: string,
		updatedAt: string,
}

export interface ICategoryDto extends Pick<ICategory, 'name'> {
	video?: string
}
