import { useEffect, useState } from "react";
import { getAllReviews } from "../services/reviewService";
import { showToast } from "../lib/toast";
import LoadingSkeleton from "../components/LoadingSekeleton";
import ReviewCard from "../components/ReviewCard";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAllReviews()
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching reviews:", error);
        showToast({
          type: "error",
          description: "There was an issue getting reviews",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-18 mx-auto mb-20 w-full max-w-7xl flex-col items-center justify-between">
      <div className="mt-20 flex items-center justify-between">
        <div className="text-3xl font-bold">Book Reviews</div>
        <div>
          <Button icon={<Plus />} onClick={() => navigate("/add-review")}>
            ADD REVIEW
          </Button>
        </div>
      </div>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              review={review}
              key={review._id}
              setReviews={setReviews}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
