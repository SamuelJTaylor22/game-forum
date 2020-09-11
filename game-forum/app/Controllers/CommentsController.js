import { ProxyState } from "../AppState.js";
import { AuthService } from "../Services/AuthService.js";
import { commentsService } from "../Services/CommentsService.js";


//Private
function _draw() {
  let comments = ProxyState.comments;
  let template = ''
  comments.forEach(p => template += p.Template)
  document.getElementById(" ").innerHTML = template
}

//Public
export default class CommentsController {
  constructor() {
    AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, () => {
      ProxyState.on("comments", _draw);
      this.getComments()
      console.log(ProxyState.comments)
    })
  }

  addComment(event) {
    event.preventDefault()
    let e = event.target
    let rawComment = { title: e.title.value, body: e.body.value, imgUrl: e.imgUrl.value, category: e.category.value }

    try {
      commentsService.addComment(rawComment)
    } catch (error) {
      console.error(error)
    }
    e.reset()
  }

  getComments() {
    try {
      commentsService.getComments()
    } catch (error) {
      console.error(error);
    }
  }

  deleteComment(id) {
    try {
      commentsService.deleteComment(id)
    } catch (error) {
      console.error(error);
    }

  }
}