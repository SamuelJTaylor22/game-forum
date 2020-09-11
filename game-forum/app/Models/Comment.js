export default class Comment{

  constructor(data){
    this.postId = data.postId
    this.user = data.user
    this.body = data.body
    this.upvotes = data.upvotes || 0
    this.downvotes = data.downvotes || 0
  }




}