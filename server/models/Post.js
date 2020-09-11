import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true, default: "No body" },
    creatorEmail: { type: String, required: true },
    img: { type: String, required: false, default: "//placehold.it/200x200" },
    upvote: { type: Number, required: false, default: 0 },
    downvote: { type: Number, required: false, default: 0 },
    category: { type: String, required: true, enum:["raid", "dngn", "pvp", "quest","farm","lore","misc"], default: "misc" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Post.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Post;
