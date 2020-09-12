export default class Comment {

  constructor(data) {
    this.post = data.post
    this.creatorEmail = data.creatorEmail
    this.body = data.body
    this.upvote = data.upvote || []
    this.downvote = data.downvote || []
    this._id = data._id
  }

  get Template() {
    return `
    <div class="card mt-1 border border-primary">
    <h2 class="my-1 ml-1">${this.creatorEmail} | ${this.body} | <span>${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true" onclick="app.commentsController.vote(true, '${this._id}')"></i>  ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true" onclick="app.commentsController.vote(false, '${this._id}')"></i></span><button type="button" class="btn btn-syellow float-right mr-1" onclick="app.commentsController.deleteComment('${this._id}')">Delete Comment</button></h2>
</div>
    `
  }

}