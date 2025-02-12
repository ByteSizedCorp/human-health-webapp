import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { DoctorService } from '../../../services/DoctorService';

const PreviousAppointments: React.FC = () => {
    const [previousAppointments, setPreviousAppointments] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const previous = await DoctorService.getPreviousAppointments() as any[];
            setPreviousAppointments(previous);
        };
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Previous Appointments
                </Typography>
                <List>
                    {previousAppointments.map((appointment: any) => (
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

export default PreviousAppointments;