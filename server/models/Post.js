import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true, default: "No body" },
    creatorEmail: { type: String, required: true },
    img: { type: String, },
    upvote: [{ type: String}],
    downvote: [{ type: String}],
    category: { type: String, required: true, enum:["raid", "dngn", "pvp", "quest","farm","lore","misc"], default: "misc" },
    display: { type: Boolean, required: true, default: true}
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


// default: "//placehold.it/200x200" 