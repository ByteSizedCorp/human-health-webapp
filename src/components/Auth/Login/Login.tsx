import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Box, Link, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { AuthService } from '../../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Create this CSS file for custom styles

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleUserTypeChange = (event: SelectChangeEvent<string>) => {
        setUserType(event.target.value as string);
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await AuthService.login(email, password, userType) as { success: boolean };
        if (response.success) {
            console.log('Login successful');
            if(userType === 'doctor') {
                navigate('/doctor/home');
            }
            // Handle successful login
        }
    };

    const handleGoogleSuccess = (response: any) => {
        console.log('Google login success:', response);
        // Handle Google login success
    };

    const handleGoogleFailure = () => {
        console.log('Google login failure');
        // Handle Google login failure
    };

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Box mt={5}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h4" component="h2" gutterBottom align="center">
                                Login
                            </Typography>
                            <form className="login-form" onSubmit={handleLogin}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>User Type</InputLabel>
                                    <Select
                                        value={userType}
                                        onChange={handleUserTypeChange}
                                        label="User Type"
                                        required
                                    >
                                        <MenuItem value="doctor">Doctor</MenuItem>
                                        <MenuItem value="patient">Patient</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Login
                                </Button>
                            </form>
                            <Box mt={2} textAlign="center">
                                <Typography variant="body2">
                                    Don't have an account? <Link href="/signup">Sign Up</Link>
                                </Typography>
                            </Box>
                            <Box mt={2} textAlign="center">
                                <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                                    <GoogleLogin
                                        onSuccess={handleGoogleSuccess}
                                        onError={handleGoogleFailure}
                                    />
                                </GoogleOAuthProvider>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Login;