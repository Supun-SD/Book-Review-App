import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { showToast } from "../lib/toast";
import { createReview } from "../services/reviewService";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function AddReview() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (bookTitle === "") {
      showToast({
        type: "error",
        description: "Book title cannot be empty",
      });
      return;
    }

    if (bookAuthor === "") {
      showToast({
        type: "error",
        description: "Book author cannot be empty",
      });
      return;
    }
    if (text === "") {
      showToast({
        type: "error",
        description: "Review field cannot be empty",
      });
      return;
    }
    if (rating === 1) {
      showToast({
        type: "error",
        description: "Please select a rating",
      });
      return;
    }
    const review = {
      ...(name && { customerName: name }),
      text: text,
      rating: parseInt(rating),
      bookDetails: {
        title: bookTitle,
        author: bookAuthor,
      },
    };

    setIsLoading(true);
    createReview(review)
      .then((response) => {
        showToast({
          type: "success",
          description: "Your review has been submitted successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log("Error submitting the review:", error);
        showToast({
          type: "error",
          description: "There was an error submitting your review",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mt-18 mx-auto mb-20 w-full max-w-3xl flex-col items-center justify-between">
      <div className="mt-20 text-3xl font-bold">Add a review</div>
      <div className="mt-8 rounded-xl bg-white p-10">
        <Input
          label="Your name (Optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label="Book title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            placeholder="Enter the book title"
          />
          <Input
            label="Author"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            placeholder="Enter the author of the book"
          />
        </div>
        <div className="mt-5">
          <ReactStars
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
        <div className="mt-5 flex justify-end">
          <Button isLoading={isLoading} onClick={handleDelete}>
            SUBMIT REVIEW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddReview;
