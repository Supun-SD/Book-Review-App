import axios from "axios";
import baseURL from "./apiConfig";

export const createReview = async (review) => {
  return await axios.post(`${baseURL}/reviews`, review);
};

export const getAllReviews = async () => {
  return await axios.get(`${baseURL}/reviews`);
};

export const updateReview = async (id, newData) => {
  return await axios.put(`${baseURL}/reviews/${id}`, newData);
};

export const deleteReview = async (id) => {
  return await axios.delete(`${baseURL}/reviews/${id}`);
};
