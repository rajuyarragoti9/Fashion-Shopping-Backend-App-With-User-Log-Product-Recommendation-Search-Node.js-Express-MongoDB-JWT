// routes/productRecommendationRoutes.js
const express = require("express");
const router = express.Router();
const {
  recommendProducts,
} = require("../controllers/productRecommendationController");

router.get("/recommendation", recommendProducts);

module.exports = router;
