import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Box, Link } from '@mui/material';
import { AuthService } from '../../../services/AuthService';
// import './DoctorSignUp.css'; // Create this CSS file for custom styles

const DoctorSignUp: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [certifications, setCertifications] = useState('');

    const handleSpecializationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpecialization(event.target.value);
    };

    const handleCertificationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCertifications(event.target.value);
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        const userData = {
            fullName,
            email,
            password,
            specialization,
            certifications,
            userType: 'doctor'
        };
        const response = await AuthService.signUp(userData) as { success: boolean };
        if (response.success) {
            console.log('Sign up successful');
            // Handle successful sign-up
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Card elevation={3}>
                    <CardContent>
                        <Typography variant="h4" component="h2" gutterBottom align="center">
                            Doctor Sign Up
                        </Typography>
                        <form className="signup-form" onSubmit={handleSignUp}>
                            <TextField
                                label="Full Name"
                                name="fullName"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <TextField
                                label="Specialization"
                                name="specialization"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                value={specialization}
                                onChange={handleSpecializationChange}
                            />
                            <TextField
                                label="Certifications"
                                name="certifications"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                required
                                value={certifications}
                                onChange={handleCertificationsChange}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Sign Up
                            </Button>
                        </form>
                        <Box mt={2} textAlign="center">
                            <Typography variant="body2">
                                Already have an account? <Link href="/login">Login</Link>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default DoctorSignUp;