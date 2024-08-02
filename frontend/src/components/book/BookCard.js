import React from 'react';
import './bookcard.css';

const BookCard = ({ book, user }) => {

    const handleBuy = () => {
        window.open(book.visit, '_blank');
    };

    return (
        <div className="book-card">
            <img src={book.cover} alt={`${book.title} cover`} className="book-cover" />
            <div className="book-details">
                <h2 className="book-title">{book.title}</h2>
                <h3 className="book-author">{book.author}</h3>
                <p className="book-description">{book.description}</p>
                <button onClick={handleBuy} disabled={!user}>Buy Now</button>
            </div>
        </div>
    );
}

export default BookCard;