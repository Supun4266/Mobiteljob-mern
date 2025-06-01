import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';

import './App.css';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                      <Route path="/" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/home" element={<Home />} />
                        {/* Add more routes as needed */}

                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;