const axios = require("axios");
const Product = require("../models/ProductModel");
const { v4: uuidv4 } = require("uuid");

const topProducts = async (req, res) => {
  try {
    // Extracting parameters
    const { categoryName, companyname } = req.params;

    // Extracting query parameters
    const { top, minPrice, maxPrice, sortBy, sortOrder, page, limit } =
      req.query;

    // Predfined companies
    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

    // Validating parameters
    if (!categoryName || !companyname || !companies.includes(companyname)) {
      return res.status(400).json({
        message: "Invalid Category or Company Name",
        timestamp: new Date().toISOString(),
        status: 400,
      });
    }

    // Validating query parameters
    if (!top || !minPrice || !maxPrice) {
      return res.status(400).json({
        message: "top, minPrice, and maxPrice are required in query parameters",
        timestamp: new Date().toISOString(),
        status: 400,
      });
    }

    // Generating URL Strings
    let URL = `http://20.244.56.144/test/companies/${companyname}/categories/${categoryName}/products`;
    URL += `?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    if (sortBy) URL += `&sortBy=${sortBy}`;
    if (sortOrder) URL += `&sortOrder=${sortOrder}`;
    if (page) URL += `&page=${page}`;

    // getting Access Token
    const AccessRequest = await axios.post("http://20.244.56.144/test/auth", {
      companyName: "goMart",
      clientID: "8a694f73-3c06-40e0-b1ec-ce2b2ec718c5",
      clientSecret: "GeruIClGRjMurgWh",
      ownerName: "Bishal De",
      ownerEmail: "bb3477@srmist.edu.in",
      rollNo: "RA2111026010231",
    });
    var ACCESS = AccessRequest.data.access_token;

    // Fetching data from the URL
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${ACCESS}`,
      },
    });

    const productsWithIds = response.data.map((product) => ({
      ...product,
      id: uuidv4(), // Generate UUID for each product
    }));
    
    //Pagination 
    const pageLimit = limit ? parseInt(limit) : 10;
    const pageNumber = page ? parseInt(page) : 1;
    const startIndex = (pageNumber - 1) * pageLimit;
    const endIndex = pageNumber * pageLimit;
    const paginatedProducts = productsWithIds.slice(startIndex, endIndex);

    const savedProducts = await Product.insertMany(paginatedProducts);

    // Sending response
    res.status(200).json({
      URL: URL,
      message: "Success",
      timestamp: new Date().toISOString(),
      status: 200,
      data: savedProducts,
      pagination: {
        totalPages: Math.ceil(productsWithIds.length / pageLimit),
        currentPage: pageNumber,
        totalItems: productsWithIds.length
      }
    });
  } catch (err) {
    // Error Handling
    res.status(500).json({
      message: err.message,
      timestamp: new Date().toISOString(),
      status: 500,
    });
  }
};

module.exports = topProducts;
