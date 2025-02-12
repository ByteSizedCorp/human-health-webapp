import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Header from './components/Header/Header';
import DoctorSignUp from './components/Doctor/DoctorSignUp/DoctorSignUp';
import DoctorHome from './components/Doctor/DoctorHome/DoctorHome';
import PreviousAppointments from './components/Doctor/PreviousAppointments/PreviousAppointments';
import UpcomingAppointments from './components/Doctor/Upcoming Appointments/UpcomingAppointments';
import MoneyEarned from './components/Doctor/MoneyEarned/MoneyEarned';

const App: React.FC = () => {
    return (
        <Router>
          <Header></Header>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/doctor-signup" element={<DoctorSignUp />} />
                <Route path="/doctor/home" element={<DoctorHome />} />
                <Route path="/doctor/previous-appointments" element={<PreviousAppointments />} />
                <Route path="/doctor/upcoming-appointments" element={<UpcomingAppointments />} />
                <Route path="/doctor/money-earned" element={<MoneyEarned />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;