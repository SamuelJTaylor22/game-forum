import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async find(query = {}) {
    let comments = await dbContext.Comments.find(query)
    return comments
  }

  async findById(id) {
    let comment = await dbContext.Comments.findById(id)
    if (!comment) {
      throw new BadRequest("Invalid Id")
    }
    return comment
  }

  async create(body) {
    return await dbContext.Comments.create(body)
  }

  async edit(body) {
    let update = dbContext.Comments.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Comments.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const commentsService = new CommentsService()