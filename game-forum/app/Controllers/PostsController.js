import { ProxyState } from "../AppState.js";
import { AuthService } from "../Services/AuthService.js";
import { postsService } from "../Services/PostsService.js";


//Private
function _draw() {
  let posts = ProxyState.posts;
  let template = ''
  posts.forEach(p => template += p.Template)
  document.getElementById("postList").innerHTML = template
}

function _drawActive() {
  let ap = ProxyState.activePost
  let template = ''
  if(ap){
  template = ap.activeTemplate
  }
  document.getElementById("activePost").innerHTML = template
}

//Public
export default class PostsController {
  constructor() {
   AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, ()=>{
    ProxyState.on("posts", _draw);
    ProxyState.on("activePost", _drawActive);
    _draw()
    console.log(ProxyState.user)
   })
    
  }

  addPost(event) {
    event.preventDefault()
    let e = event.target
    let rawPost = {title: e.title.value, body: e.body.value, imgUrl:e.imgUrl.value, category: e.category.value}
    
    try {
      postsService.addPost(rawPost)
    } catch (error) {
      console.error(error)
    }
    e.reset()
  }

  setPost(id){
    postsService.setPost(id)
  }

  getPosts(){
    try {
      postsService.getPosts()
    } catch (error) {
      console.error(error);
    }
  }
}