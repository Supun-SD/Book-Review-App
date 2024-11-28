const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      default: "Anonymous",
    },
    text: {
      type: String,
      required: [true, "Review text is required"],
      maxlength: [500, "Review text must be less than 500 characters"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating must be at most 5"],
    },
    bookDetails: {
      title: {
        type: String,
        required: [true, "Book title is required"],
      },
      author: {
        type: String,
        required: [true, "Book author is required"],
      },
      publicationYear: {
        type: Number,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
