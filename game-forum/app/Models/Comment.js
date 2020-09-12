export default class Comment {

  constructor(data) {
    this.post = data.post
    this.creatorEmail = data.creatorEmail
    this.body = data.body
    this.upvotes = data.upvotes || 0
    this.downvotes = data.downvotes || 0
  }

  get Template() {
    return `
      <h1 class="border border-primary">${this.creatorEmail} | ${this.body} | <span>${this.upvotes} <i class="fa fa-arrow-up" aria-hidden="true"></i>  ${this.downvotes} <i class="fa fa-arrow-down" aria-hidden="true"></i></span></h1>
    `
  }

}