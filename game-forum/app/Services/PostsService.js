import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";
import { commentsService } from "./CommentsService.js";

class PostsService {
  async deletePost(id) {
    console.log(id);
    let res = await api.delete(`api/posts/${id}`)
    console.log(res)
    ProxyState.activePost = null
    ProxyState.comments = []
    this.getPosts()
  }
  async getPosts() {
    let res = await api.get("api/posts")
    ProxyState.posts = res.data.map(p => new Post(p))
  }
  setPost(id) {
    let foundpost = ProxyState.posts.find(p => p.title == id)
    ProxyState.activePost = foundpost
    commentsService.getComments()
  }
  async addPost(rawPost) {
    rawPost.user = ProxyState.user.email
    await api.post("api/posts", rawPost)
    this.getPosts()
  }
}

export const postsService = new PostsService();

