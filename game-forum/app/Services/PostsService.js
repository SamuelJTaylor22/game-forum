import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";

class PostsService {
  addPost() {
    ProxyState.posts = [...ProxyState.posts, new Post({ title: Math.random() })]
  }
}

export const postsService = new PostsService();

