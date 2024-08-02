import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import './book.css';

const books = [
    {
        cover: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3FevjUzdZVbu2yqKUYfBs2ue-ni2qeSCy8OUgG5WcHqC1G1V-tbCQls18m4QfTMjPgBdBDYuR5z7FYlRYYwbvwRz0OUD7e4tixDHWHAVgQcwz4EnzZoLC',
        title: 'Think Straight: Change your thoughts',
        author: 'Darius Foroux',
        description: 'This international bestseller, featuring a bonus chapter previously available only to Darius online subscribers, is available in India for the first time.',
        visit: 'https://www.amazon.in/dp/0143452134/ref=asc_df_0143452134/?gad_source=4'
    },
    {
        cover: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQU6vfXK96sHdVr87Zou4JfQ-1X0KmWYdJF_OPhopdR0pi4VVFn3vPL4CbIy-_7TRERr7XqIZnpXbOig9G86NwhnhljVdptUYG2Z2LujzjACUNDMBUG2paZtw',
        title: 'The Dhoni Touch',
        author: 'Sundaresan Bharat',
        description: 'For over a decade, Mahendra Singh Dhoni has captivated the world of cricket and over a billion Indians with his incredible ingenuity as captain, wicketkeeper and batsman.',
        visit: 'https://www.amazon.in/dp/0143440063/ref=asc_df_0143440063/?gad_source=4'
    },
    {
        cover: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS22JOXc7DE-EX7kzMznMBQ1j-TQR5ljMKR3QAiEw1X2ubes0B-EYYsFbRb0obDMmE2z4yyaHAiw1Z0eOZy_NJrFREe45npIUd-cfWahmoQWYt2fZK5did5',
        title: 'The Story of Tata: 1868 to 2021',
        author: 'Tata-Mistry',
        description: 'n 1868, Jamsetji Tata, a visionary of his time, lit the flame that went on to become Tata and its group of companies. This business grew into an extraordinary one. One that some may even call the greatest company in the world. ',
        visit: 'https://www.amazon.in/dp/0670090220/ref=asc_df_0670090220/?gad_source=4'
    },
    // Add more book objects here
];

const BooksPage = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    return (
        <>
            <div className='book-container'>
                <h1>Find your Book</h1>
                <div className="books-page">
                    {books.map((book, index) => (
                        <BookCard key={index} book={book} user={user} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BooksPage;