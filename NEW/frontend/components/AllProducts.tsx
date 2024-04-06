'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

const products = [
  {
    id: 1,
    productName: "Smartphone",
    price: 599,
    discount: 10,
    rating: 4.5,
    availability: "In Stock"
  },
  {
    id: 2,
    productName: "Laptop",
    price: 1299,
    discount: 15,
    rating: 4.8,
    availability: "Out of Stock"
  },
  {
    id: 3,
    productName: "Headphones",
    price: 99,
    discount: 20,
    rating: 4.2,
    availability: "In Stock"
  },
  {
    id: 4,
    productName: "Tablet",
    price: 399,
    discount: 5,
    rating: 4.0,
    availability: "In Stock"
  },
  {
    id: 5,
    productName: "Smartwatch",
    price: 199,
    discount: 0,
    rating: 4.7,
    availability: "In Stock"
  },
  {
    id: 6,
    productName: "Bluetooth Speaker",
    price: 79,
    discount: 10,
    rating: 4.3,
    availability: "Out of Stock"
  },
  {
    id: 7,
    productName: "Gaming Mouse",
    price: 49,
    discount: 15,
    rating: 4.6,
    availability: "In Stock"
  },
  {
    id: 8,
    productName: "External Hard Drive",
    price: 129,
    discount: 0,
    rating: 4.4,
    availability: "In Stock"
  },
  {
    id: 9,
    productName: "Wireless Keyboard",
    price: 69,
    discount: 10,
    rating: 4.5,
    availability: "Out of Stock"
  },
  {
    id: 10,
    productName: "USB Flash Drive",
    price: 19,
    discount: 20,
    rating: 4.1,
    availability: "In Stock"
  }
];


const AllProducts = () => {
  const searchParams = useSearchParams()
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam !== null) {
      const pageNum = parseInt(pageParam);
      if (!isNaN(pageNum)) {
        setPageNumber(pageNum);
      }
    }
  }, [searchParams]);



  return (
    <>
      <section className="p-6">
        {
          pageNumber === 1 ? (<><div className="p-4 h-[300px] rounded-md bg-slate-200 flex items-center justify-center gap-10 hover:cursor-pointer">
            <h1 className="  text-2xl md:text-5xl">Outstanding Quality Of <br /> <span className="font-semibold">Products</span></h1>
            <img className="h-[100px] md:h-[200px]" src="/banner-image.png" alt="" />
          </div>  </>) : (<></>)
        }
        <div className="mt-6">
          <h1 className=" text-xl font-medium px-2">Filter By </h1>
          <form>
            <div className="flex flex-wrap md:flex-row gap-5 bg-gray-100 p-6 rounded-xl items-center justify-center">
              <div className="flex flex-col">
                <label htmlFor="category">Category</label>
                <select
                  required
                  name="category"
                  id="category"
                  className="text-xs md:text-lg px-2 py-1 w-[150px] md:w-[200px] border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col ">
                <label htmlFor="category">Category</label>
                <select
                  required
                  name="category"
                  id="category"
                  className="text-xs md:text-lg px-2 py-1 w-[150px] md:w-[200px] border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Companies</option>
                  {companies.map((companies, index) => (
                    <option key={index} value={companies}>{companies}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="sortby">Sort By</label>
                <select className="text-xs md:text-lg w-[150px] md:w-[200px] px-2 py-1 border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Sort Order</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="top">Top</label>
                <input
                  required
                  type="number"
                  id="top"
                  name="top"
                  className="px-2 py-1 w-[150px] md:w-[200px] text-xs md:text-md border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:border-blue-500"
                  placeholder="Top Value"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="minPrice">Min Price</label>
                <input
                  
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  className="px-2 py-1 w-[150px] md:w-[200px] text-xs md:text-md border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:border-blue-500"
                  placeholder="Min Price"
                  min='0'
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="maxPrice">Max Price</label>
                <input
                  
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  className="px-2 py-1 w-[150px] md:w-[200px] text-xs md:text-md border border-gray-400 rounded-md bg-white text-gray-900 focus:outline-none focus:border-blue-500"
                  placeholder="Max Price"
                />
              </div>

              <button className="bg-black text-md text-white px-3 py-1 rounded-md hover:scale-110">Search</button>

            </div>
          </form>
        </div>
        <section className="my-6">
          <h1 className="text-3xl font-semibold">Recommended items</h1>
          <div>
            <ul className="mt-6 flex flex-wrap gap-5 items-center justify-center">
              {products.map(product => (
                <li key={product.id} className=" bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <Link href={`/products/${product.id}`}>
                    <div className="p-4">
                      <img className="w-[200px] h-[200px] rounded-md" src={`https://source.unsplash.com/random?` + product.productName} alt="" />
                      <h2 className="text-2xl font-semibold text-gray-800 my-2 text-center">{product.productName}</h2>
                      <p className="text-gray-600 mb-1">ID : {product.id}</p>
                      <p className="text-gray-600 mb-1">Price: ${product.price}</p>
                      <p className="text-gray-600 mb-1">Discount: {product.discount}%</p>
                      <p className="text-gray-600 mb-1">Rating: {product.rating}</p>
                      <p className="text-gray-600">Availability: {product.availability}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className='flex items-center justify-center gap-2'>
          <Link href={`/?page=1`}>
            <button className='border-gray-400 border fg-white px-3 py-1 rounded-lg'>{'<<'}</button>
          </Link>
          <Link href={`/?page=${pageNumber}`}>
            <button className='bg-blue-400 border border-gray-400 fg-white px-3 py-1 rounded-lg'>{pageNumber}</button>
          </Link>
          <Link href={`/?page=${pageNumber + 1}`}>
            <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>{pageNumber + 1}</button>
          </Link>
          <Link href={`/?page=${pageNumber + 2}`}>
            <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>{pageNumber + 2}</button>
          </Link>
          <Link href={`/?page=${pageNumber + 3}`}>
            <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>{pageNumber + 3}</button>
          </Link>
          <Link href={`/?page=${pageNumber + 4}`}>
            <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>{pageNumber + 4}</button>
          </Link>

          <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>...</button>
          <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>{pageNumber + 10}</button>
          <button className='border border-gray-400 fg-white px-3 py-1 rounded-lg'>{'>>'}</button>
        </div>
      </section>

    </>
  )
}

export default AllProducts;