const slug = require("mongoose-slug-generator");
const mongoose = require("mongoose");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, maxLength: 255 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
