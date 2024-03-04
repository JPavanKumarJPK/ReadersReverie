import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { _id, bookTitle, imageURL, authorName, bookDescription } = useLoaderData();
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        // You can add code here to update the rating in your database or perform other actions
    };

    const StarRating = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i <= rating ? "text-yellow-500 cursor-pointer" : "text-gray-400 cursor-pointer"}
                    onClick={() => handleRatingChange(i)}
                >
                    &#9733;
                </span>
            );
        }
        return (
            <div className="flex items-center">
                {stars}
                <span className="ml-2">{rating}/5</span>
            </div>
        );
    };

    return (
        <div className='mt-28 px-4 lg:px-24 flex items-start'>
            <div className="flex flex-col">
                <img src={imageURL} alt={bookTitle} className='h-96'/>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 mb-2 transition duration-300">Add to Cart</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 mb-2 transition duration-300">Buy Now</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mb-2 transition duration-300">Add to Wishlist</button>
                </div>
            </div>
            <div className="ml-4">
            <h2 className="text-3xl font-semibold mb-2 text-red-500">{bookTitle}</h2> {/* Apply text-red-500 class */}
                <h3 className="text-xl font-medium mb-2">{authorName}(author)</h3>
                <h3 className="text-xl font-medium mb-2">About the Book</h3>
                <p className="text-gray-700 mb-4">{bookDescription}</p>
                <StarRating />
            </div>
        </div>
    );
}

export default SingleBook;
