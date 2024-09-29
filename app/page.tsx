"use client"
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>}/>
                    <Route path="/about" element={<About/> } />
                    <Route path="/contact" element={<Contact/>}/>

                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;


