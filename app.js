// app.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const productSearchRoutes = require("./routes/productSearchRoutes");
const productRecommendationRoutes = require("./routes/productRecommendationRoutes");
const { authenticateToken } = require("./middleware"); // Import the middleware

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Include your routes
app.use("/user", userRoutes);
app.use("/product", authenticateToken, productSearchRoutes); // Apply middleware to the product search route
app.use("/product", authenticateToken, productRecommendationRoutes); // Apply middleware to the product recommendation route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
