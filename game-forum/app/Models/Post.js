export default class Post{

  constructor(data){
    this.title = data.title
    this.user = data.user
    this.category = data.category || "misc"
    this.body = data.body
    this.imgUrl = data.imgUrl || "placehold.it/200x200"
    this.upvotes = data.upvotes || 0
    this.downvotes = data.downvotes || 0
  }


  get Template(){
    return `
    <li>
    `
  }




}