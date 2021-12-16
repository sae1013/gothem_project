const { Schema } = require('mongoose');
const productSchema = require('./product');
const shortId = require('./types/shortId');

const UserSchema = new Schema(
  {
    shortId,
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber:{
      type:String,
      required:true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Proudct',
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = UserSchema;
