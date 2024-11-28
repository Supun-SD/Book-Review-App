const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const reviewRoutes = require("./routes/reviewRoutes");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/reviews", reviewRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
