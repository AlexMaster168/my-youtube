import { api } from '@/http/interceptors'
import { IComment } from '@/services/types/comment.interface'

class CommentService {
	async getCommentByUser(videoId: number | undefined) {
		return await api.get<IComment[]>(`/comment/by-user/${videoId}`)
	}

	async createComment(body: IComment) {
		return await api.post<Comment>(`/comment`, body)
	}
}

const commentService = new CommentService();
export default commentService
