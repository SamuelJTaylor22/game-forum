import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";

class PostsService {
  setPost(id) {
    let foundpost = ProxyState.posts.find(p => p.title == id)
    ProxyState.activePost = foundpost
  }
  addPost(rawPost) {

    ProxyState.posts = [...ProxyState.posts, new Post(rawPost)]
  }
}

export const postsService = new PostsService();

