import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Box, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import PatientSignUp from '../../Users/PatientSignUp/PatientSignUp';
import DoctorSignUp from '../../Doctor/DoctorSignUp/DoctorSignUp';
import './SignUp.css'; // Create this CSS file for custom styles

const SignUp: React.FC = () => {
    const [userType, setUserType] = useState('');

    const handleUserTypeChange = (event: SelectChangeEvent<string>) => {
        setUserType(event.target.value as string);
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Card elevation={3}>
                    <CardContent>
                        <Typography variant="h4" component="h2" gutterBottom align="center">
                            Sign Up
                        </Typography>
                        {!userType ? (
                            <form className="signup-form">
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
                            </form>
                        ) : userType === 'doctor' ? (
                            <DoctorSignUp />
                        ) : (
                            <PatientSignUp />
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default SignUp;