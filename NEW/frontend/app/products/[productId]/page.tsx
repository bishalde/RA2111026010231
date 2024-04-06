import React from 'react'

const Product = ({ params }: any) => {
    return (
        <>
            <div className='flex flex-col md:flex-row p-5 items-center justify-center'>
                <div className='w-full mg:w-[50%] h-[80vh] flex items-center justify-center'>
                    <img className='h-[500px] w-[500px]' src="https://source.unsplash.com/random?laptop" alt="" />
                </div>
                <div className='w-full mg:w-[50%] flex flex-col justify-center'>
                    <h1 className='text-4xl my-4 font-bold'>Computer 12</h1>
                    <h1>ID : hvsdhf78fsd7f8sd</h1>
                    <div>
                        <button className=' bg-blue-500 px-3 py-1 text-white rounded-md my-2 mx-1'>Buy Now</button>
                        <button className=' bg-green-500 px-3 py-1 text-white rounded-md my-2 mx-1'>Add To Cart</button>
                    </div>
                    <div className=' flex my-2'>
                        <img className='h-[20px]' src="/icons8-star-48.png" alt="star" />
                        <img className='h-[20px]' src="/icons8-star-48.png" alt="star" />
                        <img className='h-[20px]' src="/icons8-star-48.png" alt="star" />
                        <img className='h-[20px]' src="/icons8-star-48.png" alt="star" />
                    </div>
                    <h1 className='text-xl'> <span className=' line-through'>₹ 1990</span> <sup>-15%</sup> <span className='font-bold'>999/-</span></h1>
                    <h1 className='p-2 my-4 text-center border border-gray-300 w-[100px]'> In Stocks</h1>
                    <h1 className='text-xl font-medium'>Description</h1>
                    <p className='text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem at quia. Quasi maxime explicabo necessitatibus blanditiis, similique aspernatur beatae quidem optio? Officia, reiciendis rerum impedit minus illum error sint iusto sed explicabo, cupiditate facere quo placeat. Et, tempore, aperiam atque porro quis dolores numquam cumque autem voluptate laboriosam a accusantium possimus culpa tenetur dolore veritatis voluptas maxime soluta odio quos aspernatur. Tenetur beatae numquam repellat. Quas exercitationem possimus laudantium id dolore quae, asperiores eligendi deserunt unde autem temporibus reiciendis earum laboriosam. Non ab repellat aliquid. Saepe reiciendis sequi fugit dolorum vel totam, architecto necessitatibus alias dolores culpa, voluptate molestias!</p>
                </div>
            </div>
        </>
    )
}

export default Product