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

  async sortByUpvote() {
    await ProxyState.comments.sort((a, b) => ((a.upvote.length - a.downvote.length) > (b.upvote.length - b.downvote.length)) ? -1 : 1)
    ProxyState.comments = ProxyState.comments
    console.log(ProxyState.comments)
  }

  async sortByDownvote() {
    await ProxyState.comments.reverse()
    ProxyState.comments = ProxyState.comments
  }
}

export const commentsService = new CommentsService();

