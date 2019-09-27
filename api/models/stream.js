const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

// this will be our data base's data structure
const StreamSchema = new Schema({
  title: String,
  description: String,
  userId: String
});

StreamSchema.plugin(AutoIncrement, { inc_field: "id" });
// export the new Schema so we could modify it using Node.js
const Stream = mongoose.model("Stream", StreamSchema);

module.exports = { Stream };
