import React, { useEffect, useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // checking if the user is logged in by looking at localstorage or another mecanism
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    }

    return (
        <header className='header'>
            <div className='header-left'>
                <h1>Book Store</h1>
            </div>
            <div className='header-right'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/book">Books</Link></li>
                    <li><Link to="/course">Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='btn'>
                {user ? (
                    <>
                        <span className='username'>Welcome, {user.name}</span>
                        <button className="logoutbtn" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link className="loginbtn" to="/login">Login</Link>
                )}
            </div>
        </header>
    );
}

export default Header;