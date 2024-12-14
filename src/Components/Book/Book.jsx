import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, rating, totalPages, bookName, author, tags, category } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-blue-200 py-8 rounded-2xl">
                    <img
                        src={image}
                        className="h-[166px] object-cover"
                        alt={`Cover of the book ${bookName}`}
                    />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4 flex-wrap">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className="btn btn-xs bg-green-300 text-green-500"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <h2 className="card-title mt-4">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="mt-2">By: {author}</p>
                    <div className="border-t-2 border-dashed my-4"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                       
                       
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    name={`rating-${bookId}`}
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
