import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";

class CommentsService {
  async deleteComment(id) {
    console.log(id);
    let res = await api.delete(`api/posts/${id}`)
    console.log(res)
    ProxyState.activePost = null
    this.getComments()
  }

  async getComments() {
    let res = await api.get(`api/posts/${ProxyState.activePost._id}/comments`)
    ProxyState.comments = res.data.map(c => new Comment(c))
  }

  async addComment(rawComment) {
    rawComment.user = ProxyState.user.email
    await api.post("api/comments", rawComment)
    this.getComments()
  }
}

export const commentsService = new CommentsService();

