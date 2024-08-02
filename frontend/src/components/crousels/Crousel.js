import React from 'react';
import './crousel.css';

const Crousel = () => {

    const books = [
        {
            title: 'Book 1',
            author: 'Author 1',
            image: 'path/to/book1.jpg',
            description: 'This is the first book.'
        },
        {
            title: 'Book 2',
            author: 'Author 2',
            image: 'path/to/book2.jpg',
            description: 'This is the second book.'
        },
        {
            title: 'Book 3',
            author: 'Author 3',
            image: 'path/to/book3.jpg',
            description: 'This is the third book.'
        }
    ];

    return (
        <>
            <div className='book-crousel'>
                {books.map((book, index) => (
                    <div className='book-slide' key={index}>
                        <img src={book.image} alt={`${book.title} cover`} />
                        <div className='legend'>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Crousel;