export default class Post{

  constructor(data){
    this.title = data.title
    this.creatorEmail = data.creatorEmail
    this.category = data.category || "misc"
    this.body = data.body
    this.imgUrl = data.imgUrl || "//placehold.it/600x200"
    this.upvotes = data.upvotes || 0
    this.downvotes = data.downvotes || 0
    this._id = data._id
  }


  get Template(){
    return `

    <li class="border border-primary px-2 list-group-item" onclick="app.postsController.setPost('${this.title}')"><h1>${this.category.toUpperCase()} | ${this.creatorEmail} | ${this.title} | <span>${this.upvotes} <i class="fa fa-arrow-up" aria-hidden="true"></i> | ${this.downvotes} <i class="fa fa-arrow-down" aria-hidden="true"></i></span></h1></li>
    `
  }

  get activeTemplate(){
    return `
    <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">${this.title} | ${this.creatorEmail}</h4>
                    <img class="card-img" src="${this.imgUrl}" alt="" style="">
                    <p class="card-text">${this.body}</p>
                    <button type="button" class="btn btn-danger" onclick="app.postsController.deletePost('${this._id}')">Delete Post</button>
                  </div>
    </div>
    `
  }




}