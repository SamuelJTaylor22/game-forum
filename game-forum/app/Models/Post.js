export default class Post {

  constructor(data) {
    this.title = data.title
    this.creatorEmail = data.creatorEmail
    this.category = data.category || "misc"
    this.body = data.body
    this.img = data.img || "//placehold.it/600x200"
    this.upvote = data.upvote || []
    this.downvote = data.downvote || []
    this._id = data._id
    this.display = data.display
  }


  get Template() {
    return `
    <div class="card mt-1 ml-1">
    <li class="border border-primary px-2 list-group-item bg-white" onclick="app.postsController.setPost('${this._id}')"><h2>${this.category.toUpperCase()} | ${this.creatorEmail} | ${this.title} | <span>${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true" onclick="app.postsController.vote(true,'${this._id}')"></i> | ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true" onclick="app.postsController.vote(false,'${this._id}')"></i></span></h2></li>
    </div>
    `
  }

  get activeTemplate() {
    return `
    <div class="card bg-swhite shadow m-3">
        <div class="card-body">
          <h4 class="card-title">${this.title} | ${this.creatorEmail} | <span class="float-right">${this.upvote.length} <i class="fa fa-arrow-up" aria-hidden="true" onclick="app.postsController.vote(true,'${this._id}')"></i> | ${this.downvote.length} <i class="fa fa-arrow-down" aria-hidden="true" onclick="app.postsController.vote(false,'${this._id}')"></i></span></h4>
          <img class="card-img" src="${this.img}" alt="" style="">
          <p class="card-text">${this.body}</p>
          <button type="button" class="btn btn-syellow" onclick="app.postsController.deletePost('${this._id}')">Delete Post</button>
        <form class="form-inline my-1" onsubmit="app.commentsController.addComment(event)">
          <div class="form-group">
            <input type="text" name="comment" id="comment" class="ml-1 form-control" placeholder="Leave comment..."
              aria-describedby="helpId">
          </div>
          <button type="submit" class="btn btn-blue form-control ml-2"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Comment</button>
        </form>
        </div>
        <div class="text-center my-2">
          <button class="btn btn-blue" onclick="app.commentsController.sortByDownvote()" style="width: 15%">Comment Sort</button>
        </div>
        <ul id="comments">
        </ul>
    </div>
    `
  }




}