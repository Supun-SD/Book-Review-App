import profileImg from "../assets/profile.png";
import { SquarePen, Star, Trash2 } from "lucide-react";
import ConfirmationDialog from "./ConfirmationDialog";
import PopUpModel from "../components/PopUpModel";
import { deleteReview } from "../services/reviewService";
import { showToast } from "../lib/toast";

function ReviewCard({ review, setReviews }) {
  const { bookDetails, customerName, text, rating, createdAt } = review;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={20}
          className={`${i <= rating ? "text-yellow-500" : "text-gray-300"}`}
        />,
      );
    }
    return stars;
  };

  const handleDelete = async () => {
    deleteReview(review._id)
      .then((response) => {
        setReviews((prevReviews) =>
          prevReviews.filter((r) => r._id !== review._id),
        );
        showToast({
          type: "success",
          description: "Review has been deleted successfully",
        });
      })
      .catch((error) => {
        console.log("Error deleting the review:", error);
        showToast({
          type: "error",
          description: "There was an error deleting the review",
        });
      })
      .finally(() => {});
  };

  return (
    <div className="rounded-xl bg-white shadow-lg">
      <div className="mx-3 mt-3 rounded-xl bg-slate-100 px-5 py-4">
        <div className="text-xl font-extrabold">{bookDetails.title}</div>
        <div className="text-lg">by {bookDetails.author}</div>
      </div>

      <div className="mb-6 mt-4 px-8">
        <div className="flex items-center gap-3">
          <div className="h-16 w-14 overflow-hidden rounded-full">
            <img
              src={profileImg}
              alt="product image"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-lg font-bold">{customerName}</div>
            <div className="text-gray-500">
              {createdAt.split("T")[0].replaceAll("-", ".")}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="mt-4 flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <div className="flex gap-2">
            <PopUpModel
              button={
                <SquarePen className="cursor-pointer" size={20} color="gray" />
              }
            ></PopUpModel>
            <ConfirmationDialog
              message="Once deleted, this review cannot be recovered. Are you sure you want to proceed?"
              action={handleDelete}
            >
              <Trash2 className="cursor-pointer" size={20} color="gray" />
            </ConfirmationDialog>
          </div>
        </div>

        <div className="mt-2 text-justify text-gray-700">{text}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
