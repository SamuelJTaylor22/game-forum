export default class Comment {

  constructor(data) {
    this.post = data.post
    this.creatorEmail = data.creatorEmail
    this.body = data.body
    this.upvote = data.upvote || []
    this.downvote = data.downvote || []
  }

  get Template() {
    return `
      <h1 class="border border-primary">${this.creatorEmail} | ${this.body} | <span>${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true"></i>  ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true"></i></span></h1>
    `
  }

}