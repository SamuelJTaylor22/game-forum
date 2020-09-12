export default class Comment {

  constructor(data) {
    this.post = data.post
    this.user = data.user
    this.body = data.body
    this.upvote = data.upvote || []
    this.downvote = data.downvote || []
  }

  get Template() {
    return `
      <h1>${this.body}</h1>
    `
  }

}