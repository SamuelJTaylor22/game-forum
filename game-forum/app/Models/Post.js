export default class Post {

  constructor(data) {
    this.title = data.title
    this.creatorEmail = data.creatorEmail
    this.category = data.category || "misc"
    this.body = data.body
    this.imgUrl = data.imgUrl || "//placehold.it/600x200"
    this.upvote = data.upvote || []
    this.downvote = data.downvote || []
    this._id = data._id
    this.display = true
  }


  get Template() {
    return `

    <li class="border border-primary px-2 list-group-item" onclick="app.postsController.setPost('${this.title}')"><h1>${this.category.toUpperCase()} | ${this.creatorEmail} | ${this.title} | <span>${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true" onclick="app.postsController.vote(true,'${this._id}')"></i> | ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true"></i></span></h1></li>
    `
  }

  get activeTemplate() {
    return `
    <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">${this.title} | ${this.creatorEmail} | <span class="float-right">${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true"></i> | ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true"></i></span></h4>
                    <img class="card-img" src="${this.imgUrl}" alt="" style="">
                    <p class="card-text">${this.body}</p>
                    <button type="button" class="btn btn-primary" onclick="app.postsController.deletePost('${this._id}')">yeet</button>
                    <form class="form-inline my-1" onsubmit="app.commentsController.addComment(event)">
          <div class="form-group">
            <input type="text" name="comment" id="comment" class="ml-1 form-control" placeholder="Leave comment"
              aria-describedby="helpId">
          </div>
          <i class="fa fa-plus-circle" aria-hidden="true"></i><button type="submit" class="btn btn-warning form-control">Comment!</button>
        </form>
                </div>
    </div>
    `
  }




}