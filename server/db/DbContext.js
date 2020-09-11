import mongoose from "mongoose";
import PostSchema from "../models/Post";
import ProfileSchema from "../models/Profile";
import CommentSchema from "../models/Comment"

class DbContext {
  Posts = mongoose.model("Post", PostSchema)
  Profile = mongoose.model("Profile", ProfileSchema)
  Comment = mongoose.model("Comment", CommentSchema)
}

export const dbContext = new DbContext();
