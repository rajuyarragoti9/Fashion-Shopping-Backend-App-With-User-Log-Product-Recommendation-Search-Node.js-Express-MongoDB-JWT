// controllers/productRecommendationController.js
const UserModel = require("../models/userModel");
const CatalogModel = require("../models/catalogModel");

const productRecommendationController = {
  recommendProducts: async (req, res) => {
    try {
      const { username } = req.query;

      const user = await UserModel.findOne({ username });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (!user.preferredCategory) {
        // If preferred category is not available, return random 10 products
        const randomProducts = await CatalogModel.aggregate([
          { $sample: { size: 10 } },
        ]);
        return res.json(randomProducts);
      }

      // Use a more efficient way to find the user's preferred category using a hash table
      const categoryHash = {};
      const categories = await CatalogModel.distinct("product_category");
      categories.forEach((category) => (categoryHash[category] = true));

      if (!categoryHash[user.preferredCategory]) {
        // If the preferred category doesn't exist, return random 10 products
        const randomProducts = await CatalogModel.aggregate([
          { $sample: { size: 10 } },
        ]);
        return res.json(randomProducts);
      }

      const result = await CatalogModel.find({
        product_category: user.preferredCategory,
      })
        .sort({ rank: 1 })
        .limit(10);
      res.json(result);
    } catch (error) {
      console.error(`Error recommending products: ${error.message}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = productRecommendationController;
