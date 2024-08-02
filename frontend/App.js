import React from 'react';
import Header from "./src/components/header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './src/components/home/Home';
import Login from './src/components/login/Login';
import About from './src/components/about/About';
import Register from './src/components/register/Register';
import Book from './src/components/book/Book';
import Course from './src/components/course/Course';
import Contact from './src/components/contact/Contact';


const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="*" exact element={<Home />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;