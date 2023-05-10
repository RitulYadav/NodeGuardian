const { Schema,model} = require('../connection');

const myschema = new Schema({

    name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  avatar: { type: String },
  created_at: Date,
  updated_at: Date,

});
module.exports = model('user',myschema);