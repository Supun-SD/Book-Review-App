const Review = require("../models/Review");

const getAllReviews = async () => {
  return await Review.find().sort({ createdAt: -1 });
};

const getReviewById = async (id) => {
  return await Review.findById(id);
};

const createReview = async (data) => {
  return await Review.create(data);
};

const updateReview = async (id, data) => {
  const { text, rating } = data;
  return await Review.findByIdAndUpdate(
    id,
    { text, rating },
    { new: true, runValidators: true }
  );
};

const deleteReview = async (id) => {
  return await Review.findByIdAndDelete(id);
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
