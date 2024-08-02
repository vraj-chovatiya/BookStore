import React from 'react';
import './home.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='home'>
                    <img src={logo} alt='logo' className='home-logo' />
                    <h1>Welcome to the <span>Book Store</span></h1>
                    <p>Discover the best books from a wide range of genres.</p>
                    <Link to="/book"><button className='explore-books'>Explore Books</button></Link>
                </div>
            </div>
        </>
    )
};

export default Home;