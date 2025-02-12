import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Box, Link } from '@mui/material';
import { AuthService } from '../../../services/AuthService';
// import './PatientSignUp.css'; // Create this CSS file for custom styles

const PatientSignUp: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        const userData = {
            fullName,
            email,
            password,
            userType: 'patient'
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
                            Patient Sign Up
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

export default PatientSignUp;