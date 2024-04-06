'use client'
import React, { useState } from 'react';
import axios from 'axios';

interface Product {
    id: string;
    productName: string;
    discount: number;
    price: number;
    rating: number;
    availability: any;
}





const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

export const AllProducts = () => {
    const [categoryName, setCategoryName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [top, setTop] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let queryParams: { [key: string]: string } = {}; 
        if (minPrice) queryParams['minPrice'] = minPrice;
        if (maxPrice) queryParams['maxPrice'] = maxPrice;
        if (sortBy) queryParams['sortBy'] = sortBy;
        if (sortOrder) queryParams['sortOrder'] = sortOrder;
        if (top) queryParams['top'] = top;

        try {
            const response = await axios.get(`http://localhost:8080/api/getproducts/companies/${companyName}/categories/${categoryName}/products`, {
                params: queryParams,
            });
            console.log(response.data.data);
            setProducts(response.data.data);
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };

    return (
        <>
            <div className="max-w-4xl mx-auto my-10 p-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Filter Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-4 text-gray-800">
                                    Category:
                                    <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">All Categories</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </label>
                                <label className="block mb-4 text-gray-800">
                                    Company:
                                    <select value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">All Companies</option>
                                        {companies.map((company, index) => (
                                            <option key={index} value={company}>{company}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className="block mb-4 text-gray-800">
                                    Min Price:
                                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </label>
                                <label className="block mb-4 text-gray-800">
                                    Max Price:
                                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </label>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-6 md:col-span-2 focus:outline-none hover:bg-blue-600 transition duration-300">Apply Filters</button>
                        </form>
                    </div>
                    <div>
                        <label className="block mb-4 text-gray-800">
                            Top:
                            <input type="number" value={top} onChange={(e) => setTop(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </label>
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Sort By</h2>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Sorting Option</option>
                            <option value="rating">Rating</option>
                            <option value="price">Price</option>
                            <option value="company">Company</option>
                            <option value="discount">Discount</option>
                        </select>
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Sort Order</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
                {error && <p className="text-red-500 mt-4">Error: {error}</p>}
            </div>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
                <h1 className='text-3xl font-bold text-gray-800 my-20'>All Filtered Items :</h1>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <li key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
                                <p className="text-gray-600 mb-2">ID: {product.id}</p>
                                <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                                <p className="text-gray-600 mb-2">Discount: {product.discount}%</p>
                                <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
                                <p className="text-gray-600">Availability: {product.availability}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AllProducts;