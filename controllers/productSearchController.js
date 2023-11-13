// controllers/productSearchController.js
const CatalogModel = require("../models/catalogModel");

const productSearchController = {
  searchProducts: async (req, res) => {
    try {
      const { searchKeyword, priceMin, priceMax } = req.query;

      let query = { $text: { $search: searchKeyword } };

      // Apply price range filter if provided
      if (priceMin !== undefined && priceMax !== undefined) {
        query.price = { $gte: parseInt(priceMin), $lte: parseInt(priceMax) };
      }

      const result = await CatalogModel.find(query).sort({ rank: 1 }).limit(10);

      res.json(result);
    } catch (error) {
      console.error(`Error searching products: ${error.message}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = productSearchController;
