const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const itemsSchema = {
    name: String,
    required: true,
  };
  
module.exports = mongoose.model("Item", itemsSchema);

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

module.exports = mongoose.model("List", listSchema);
