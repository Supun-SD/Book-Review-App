const reviewService = require("../services/reviewService");

const successResponse = (res, data, message = "Success") => {
  res.json({ status: "success", message, data });
};

const errorResponse = (res, code, message) => {
  res.status(code).json({ status: "error", error: { code, message } });
};

const getReviews = async (req, res, next) => {
  try {
    const reviews = await reviewService.getAllReviews();
    successResponse(res, reviews, "Reviews retrieved successfully");
  } catch (error) {
    next(error);
  }
};

const getReview = async (req, res, next) => {
  try {
    const review = await reviewService.getReviewById(req.params.id);
    if (!review) {
      return errorResponse(res, 404, "Review not found");
    }
    successResponse(res, review, "Review retrieved successfully");
  } catch (error) {
    next(error);
  }
};

const createReview = async (req, res, next) => {
  try {
    const newReview = await reviewService.createReview(req.body);
    res.status(201).json({
      status: "success",
      data: newReview,
      message: "Review created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await reviewService.updateReview(
      req.params.id,
      req.body
    );
    if (!updatedReview) {
      return errorResponse(res, 404, "Review not found");
    }
    successResponse(res, updatedReview, "Review updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const deletedReview = await reviewService.deleteReview(req.params.id);
    if (!deletedReview) {
      return errorResponse(res, 404, "Review not found");
    }
    successResponse(res, null, "Review deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
