'use client'

import React, { useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
}

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

export const AllProducts = () => {
  const [categoryName, setCategoryName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [top, setTop] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [page, setPage] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/topProducts/${categoryName}/${companyName}`, {
        params: {
          top,
          minPrice,
          maxPrice,
          sortBy,
          sortOrder,
          page,
        },
      });
      setProducts(response.data.data);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">
            Category Name:
            <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full">
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </label>
          <label className="block mb-2">
            Company Name:
            <select value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full">
              <option value="">Select Company</option>
              {companies.map((company, index) => (
                <option key={index} value={company}>{company}</option>
              ))}
            </select>
          </label>
          <label className="block mb-2">
            Top:
            <input type="number" value={top} onChange={(e) => setTop(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </label>
          <label className="block mb-2">
            Min Price:
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </label>
        </div>
        <div>
          <label className="block mb-2">
            Max Price:
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </label>
          <label className="block mb-2">
            Sort By:
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full">
              <option value="">Select Sorting Option</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
              <option value="company">Company</option>
              <option value="discount">Discount</option>
            </select>
          </label>
          <label className="block mb-2">
            Sort Order:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full">
              <option value="">Select Sort Order</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
          <label className="block mb-2">
            Page:
            <input type="number" value={page} onChange={(e) => setPage(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 md:col-span-2">Get Products</button>
      </form>
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
      <ul className="mt-4">
        {products.map(product => (
          <li key={product.id} className="bg-gray-100 p-4 rounded-md mb-2">{product.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default AllProducts;