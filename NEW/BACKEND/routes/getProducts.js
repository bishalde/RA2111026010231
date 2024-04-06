const express = require("express");
const axios = require("axios");
const topProducts = require("../controller/topProducts");
const byProductID = require("../controller/byProductID");

const router = express.Router();

router.get(
  "/companies/:companyname/categories/:categoryName/products",
  topProducts 
);

router.get(
    '/product/:productid',
    byProductID
)
module.exports = router;
