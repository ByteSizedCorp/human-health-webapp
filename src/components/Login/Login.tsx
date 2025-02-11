import React from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Box, Link } from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './Login.css'; // Create this CSS file for custom styles

const Login: React.FC = () => {
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
                            <form className="login-form">
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
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