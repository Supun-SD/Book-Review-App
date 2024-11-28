import { useState } from "react";
import Button from "./Button";
import ReactStars from "react-rating-stars-component";
import { updateReview } from "../services/reviewService";
import { showToast } from "../lib/toast";

function UpdateReview({ review, setReviews }) {
  const { bookDetails } = review;

  const [rating, setRating] = useState(review.rating);
  const [text, setText] = useState(review.text);
  const [isLoading, setIsLoading] = useState(false);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleUpdate = async () => {
    const newData = {
      rating,
      text,
    };

    setIsLoading(true);
    updateReview(review._id, newData)
      .then(() => {
        setReviews((prevReviews) =>
          prevReviews.map((r) =>
            r._id === review._id ? { ...r, ...newData } : r,
          ),
        );
        showToast({
          type: "success",
          description: "Review has been updated successfully",
        });
      })
      .catch((error) => {
        console.log("Error updating the review:", error);
        showToast({
          type: "error",
          description: "There was an error updating the review",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="mt-3 rounded-xl bg-slate-100 px-5 py-4">
        <div className="text-xl font-extrabold">{bookDetails.title}</div>
        <div className="text-lg">by {bookDetails.author}</div>
      </div>
      <div>
        <div className="mt-8">
          <label className="text-lg">Rating</label>
          <ReactStars
            value={rating}
            count={5}
            onChange={ratingChanged}
            size={40}
            activeColor="#ffd700"
          />
        </div>
        <div className="mt-5">
          <label className="text-lg text-gray-700">Your thoughts</label>
          <br />
          <textarea
            className="mt-2 w-full rounded-lg border border-gray-300 p-3 transition duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Enter your thoughts about the book"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button onClick={handleUpdate} isLoading={isLoading}>
          Update
        </Button>
      </div>
    </div>
  );
}

export default UpdateReview;
