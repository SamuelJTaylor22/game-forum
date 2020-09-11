import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";

class PostsService {
  getPosts() {
    
  }
  setPost(id) {
    let foundpost = ProxyState.posts.find(p => p.title == id)
    ProxyState.activePost = foundpost
  }
  addPost(rawPost) {
    api.post(rawPost)
    ProxyState.posts = [...ProxyState.posts, new Post(rawPost)]
  }
}

export const postsService = new PostsService();

