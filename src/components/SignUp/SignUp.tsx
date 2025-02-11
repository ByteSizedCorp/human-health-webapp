import React from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
import './SignUp.css'; // Create this CSS file for custom styles

const SignUp: React.FC = () => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Box mt={5}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h4" component="h2" gutterBottom align="center">
                                Sign Up
                            </Typography>
                            <form className="signup-form">
                                <TextField
                                    label="Full Name"
                                    name="fullName"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                />
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
                                <TextField
                                    label="Confirm Password"
                                    name="confirmPassword"
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
                                    Sign Up
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
            <Box mt={2} textAlign="center">
                <Typography variant="body2">
                    Already have an account? <a href="/login">Log in</a>
                </Typography>
            </Box>
        </React.Fragment>
    );
};

export default SignUp;