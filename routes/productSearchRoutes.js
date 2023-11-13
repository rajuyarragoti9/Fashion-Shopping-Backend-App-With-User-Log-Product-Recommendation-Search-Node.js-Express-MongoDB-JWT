// routes/productSearchRoutes.js
const express = require("express");
const router = express.Router();
const { searchProducts } = require("../controllers/productSearchController");

router.get("/search", searchProducts);

module.exports = router;
