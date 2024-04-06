const Product = require("../models/ProductModel");

const byProductID = async (req, res) => {
  try {
    const { productid } = req.params;
    const product = await Product.findOne({ productId: productid });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = byProductID;
