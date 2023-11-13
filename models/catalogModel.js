// models/catalogModel.js
const mongoose = require("mongoose");

const catalogSchema = new mongoose.Schema({
  product_id: {
    type: String,
  },
  product_category: {
    type: String,
  },
  rank: {
    type: Number,
  },
  brand_name: {
    type: String,
    text: true,
  },
  product_description: {
    type: String,
    text: true,
  },
  price: {
    type: Number,
  },
  image_link: {
    type: String,
  },
});
catalogSchema.index({ product_description: "text", brand_name: "text" });

const CatalogModel = mongoose.model("catalog", catalogSchema, "catalog");

module.exports = CatalogModel;
