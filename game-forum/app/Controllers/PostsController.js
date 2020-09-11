import { ProxyState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";


//Private
function _draw() {
  let posts = ProxyState.posts;
  let template = ''
  posts.forEach(p => template += p.Template)
  document.getElementById("post").innerHTML = template
}

//Public
export default class PostsController {
  constructor() {
    ProxyState.on("posts", _draw);
    _draw()
  }

  addPost() {
    postsService.addPost()
  }

}