const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const phoneSchema = new Schema({
  id: { type: ObjectId },
  name: { type: String},
  price: { type: Number, required: true },
  published: { type: Date, required: true },
  brand: { type: String, required: true },
});

module.exports = mongoose.model("Phone", phoneSchema);
