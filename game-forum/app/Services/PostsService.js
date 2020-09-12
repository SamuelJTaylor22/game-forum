import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from "./AxiosService.js";
import { commentsService } from "./CommentsService.js";

class PostsService {
  async vote(bool, id) {
    let found = ProxyState.posts.find(p => p._id == id)

    if (bool) {
      if (!found.upvote.find(u => u == ProxyState.user.email)) {
        found.upvote.push(ProxyState.user.email)
        await api.put(`api/posts/${id}`, found)
      }
      else {
        let index = found.upvote.findIndex(u => u == ProxyState.user.email)
        found.upvote.splice(index, 1)
        await api.put(`api/posts/${id}`, found)
      }
    }
    else {
      if (!found.downvote.find(u => u == ProxyState.user.email)) {
        found.downvote.push(ProxyState.user.email)
        await api.put(`api/posts/${id}`, found)
      }
      else {
        let index = found.downvote.findIndex(u => u == ProxyState.user.email)
        found.downvote.splice(index, 1)
        await api.put(`api/posts/${id}`, found)
      }
    }
    console.log(found)
    ProxyState.posts = ProxyState.posts
    ProxyState.activePost = ProxyState.activePost
  }
  async deletePost(id) {
    console.log(id);
    let res = await api.delete(`api/posts/${id}`)
    console.log(res)
    ProxyState.activePost = null
    ProxyState.comments = []
    let found = ProxyState.posts.findIndex(p => p._id == id)
    ProxyState.posts = ProxyState.posts.splice(found, 1)
  }
  async getPosts() {
    let res = await api.get("api/posts")
    // @ts-ignore
    ProxyState.posts = res.data.map(p => new Post(p))
    this.sortByUpvote()
  }
  setPost(id) {
    let foundpost = ProxyState.posts.find(p => p._id == id)
    ProxyState.activePost = foundpost
    commentsService.getComments()
  }
  async addPost(rawPost) {
    rawPost.user = ProxyState.user.email
    await api.post("api/posts", rawPost)
    this.getPosts()
  }

  async sortByUpvote() {
    await ProxyState.posts.sort((a, b) => ((a.upvote.length - a.downvote.length) > (b.upvote.length - b.downvote.length)) ? -1 : 1)
    ProxyState.posts = ProxyState.posts
    console.log(ProxyState.posts)
  }

  sortByDownvote() {
    ProxyState.posts.reverse()
    ProxyState.posts = ProxyState.posts
  }
  filterCategorys(category) {
    let active = ProxyState.posts.find(p => p.category == category)
    if (active.display) {
      active.display = false
    } else active.display = true
    ProxyState.posts = ProxyState.posts
  }
}

export const postsService = new PostsService();

