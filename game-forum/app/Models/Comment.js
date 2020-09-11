export default class Comment {

  constructor(data) {
    this.post = data.post
    this.user = data.user
    this.body = data.body
    this.upvotes = data.upvotes || 0
    this.downvotes = data.downvotes || 0
  }

  get Template() {
    return `
      <h1>${this.body}</h1>
    `
  }

}