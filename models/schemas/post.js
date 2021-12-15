const { Schema } = require('mongoose');
const CommentSchema = require('./comment');
const shortId = require('./types/shortId');

const PostSchema = new Schema(
  {
    shortId,
    productId:{ // 어떤제품에대한 후기인지
      type:Schema.Types.ObjectId,
      ref:'Product',
      // required:true,
      index:true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
      index: true,
    },
    title: {
      type: String,
      default: 'asdf',
    },
    content: {
      type: String,
      default: 'asdfasdf',
    },
    comments: [CommentSchema],
    commentCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = PostSchema;
