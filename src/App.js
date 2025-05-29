import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';

import './App.css';
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                      <Route path="/" element={<Register />} />
                        <Route path="/login" element={<Login />} />

                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;