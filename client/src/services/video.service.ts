import { api } from '@/http/interceptors'
import { IVideo, IVideoDto } from '@/services/types/video.interface'

class VideoService {
	async getVideosByUser(userId: number | undefined) {
		return await api.get<IVideo>(`/video/by-user/${userId}`)
	}

	async getVideoByCurrentUser() {
		return await api.get<IVideo[]>('/video/by-user-private')
	}

	async getVideosById(userId: number | undefined) {
		return await api.get<IVideo[]>(`/video/${userId}`)
	}

	async getAll() {
		return await api.get<IVideoDto[]>('/video')
	}

	async getMostPopular() {
		return await api.get<IVideo[]>('/video/popular')
	}

	async getVideoPrivateById(userId: number | undefined) {
		return await api.get<IVideo>(`/video/private/${userId}`)
	}

	async createVideo(body: IVideo) {
     return await api.post<number>('/video', body)
	}

	async updateVideo(userId: number | undefined, body: IVideo) {
		return await api.patch<IVideo>(	`/video/${userId}`, body)
	}

	async deleteVideo(userId: number | undefined) {
		return await api.delete<number>(	`/video/${userId}`)
	}

	async updateLikes(videoId: number | undefined) {
		return await api.put<IVideo>(	`/video/likes/${videoId}`)
	}

	async updateViews(videoId: number | undefined) {
		return await api.put<IVideo>(	`/video/views/${videoId}`)
	}
}

const videoService = new VideoService();
export default videoService
