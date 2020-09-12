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
      <h2 class="border border-primary">${this.creatorEmail} | ${this.body} | <span>${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true" onclick="app.commentsController.vote(true, '${this._id}')"></i>  ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true" onclick="app.commentsController.vote(false, '${this._id}')"></i></span><button type="button" class="btn btn-syellow float-right" onclick="app.commentsController.deleteComment('${this._id}')">Delete Comment</button></h2>
      
    `
  }

}