import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async find(query = {}) {
    let comments = await dbContext.Comment.find(query).populate("creator", "name picture")
    return comments
  }

  async findById(id) {
    let comment = await dbContext.Comment.findById(id)
    if (!comment) {
      throw new BadRequest("Invalid Id")
    }
    return comment
  }

  async create(body) {
    return await dbContext.Comment.create(body)
  }

  async edit(body) {
    let update = dbContext.Comment.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!update) {
      throw new BadRequest("Invalid id")
    }
    return update
  }

  async delete(id) {
    let success = await dbContext.Comment.findByIdAndDelete(id)
    if (!success) {
      throw new BadRequest("Invalid id")
    }
  }
}

export const commentsService = new CommentsService()