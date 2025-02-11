import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

const App: React.FC = () => {
    return (
        <Router>
          <Header></Header>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;