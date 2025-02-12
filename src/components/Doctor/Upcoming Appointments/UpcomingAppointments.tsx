import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { DoctorService } from '../../../services/DoctorService';

const UpcomingAppointments: React.FC = () => {
    interface Appointment {
        id: string;
        date: string;
        patient: string;
        summary: string;
    }
    
    const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const upcoming = await DoctorService.getUpcomingAppointments() as Appointment[];
            setUpcomingAppointments(upcoming);
        };
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Upcoming Appointments
                </Typography>
                <List>
                    {upcomingAppointments.map((appointment: any) => (
                        <ListItem key={appointment.id}>
                            <ListItemText
                                primary={`${appointment.date} - ${appointment.patient}`}
                                secondary={appointment.summary}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
};

export default UpcomingAppointments;