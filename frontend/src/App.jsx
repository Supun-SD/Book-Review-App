import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddReview from "./pages/AddReview";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-review" element={<AddReview />} />
      </Routes>
    </div>
  );
}
