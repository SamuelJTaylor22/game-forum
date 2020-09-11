import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
  async find(query = {}) {
    let posts = await dbContext.Posts.find(query)
    return posts
  }

  async findById(id) {
    let post = await dbContext.Posts.findById(id)
    if (!post) {
      throw new BadRequest("Invalid Id")
    }
    return post
  }

  async create(body) {
    return await dbContext.Posts.create(body)
  }

  async edit(body) {
    let update = dbContext.Posts.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
  }

  async delete(id) {
    let success = await dbContext.Posts.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const postsService = new PostsService()