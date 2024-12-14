import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredList } from '../../utilitise/Addtobdja';
import { Helmet } from 'react-helmet-async';

const BookDetail = () => {
    const { bookId } = useParams();
    console.log(bookId)
    const data = useLoaderData();
    const id = parseInt(bookId)
    console.log(data)
    const handleMarkAsRead =(id)=>{
     addToStoredList(id)
    }
    const book = data.find(book => book.bookId === id)

    const {bookId : currentBookId, image} = book || {};
    return (
        <div className='my-12'>
            <Helmet>
                <title>
                    book details || {bookId}
                </title>
            </Helmet>
            <h2>book detail: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button className="btn btn-accent">Add to WhishList</button>
        </div>
    );
};

export default BookDetail;