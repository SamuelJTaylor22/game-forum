import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";

class PostsService {
  getPosts() {
    let res = api.get("api/posts")
    ProxyState.posts = res.map(p => new Post(p))
  }
  setPost(id) {
    let foundpost = ProxyState.posts.find(p => p.title == id)
    ProxyState.activePost = foundpost
  }
  addPost(rawPost) {
    rawPost.user = ProxyState.user.email
    api.post("posts",rawPost)
    ProxyState.posts = [...ProxyState.posts, new Post(rawPost)]
  }
}

export const postsService = new PostsService();

