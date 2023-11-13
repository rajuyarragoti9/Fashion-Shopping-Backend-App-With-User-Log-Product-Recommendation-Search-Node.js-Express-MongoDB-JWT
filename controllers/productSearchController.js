// controllers/productSearchController.js
const CatalogModel = require("../models/catalogModel");

const productSearchController = {
  searchProducts: async (req, res) => {
    try {
      const { searchKeyword, priceMin, priceMax } = req.query;

      const result = await CatalogModel.find({
        $text: { $search: searchKeyword },
      })
        .sort({ rank: 1 })
        .limit(10);

      res.json(result);
    } catch (error) {
      console.error(`Error searching products: ${error.message}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = productSearchController;
