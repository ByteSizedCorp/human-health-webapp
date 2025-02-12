import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DoctorService } from '../../../services/DoctorService';
// import './DoctorHome.css'; // Create this CSS file for custom styles

const DoctorHome: React.FC = () => {
    const navigate = useNavigate();
    const [previousAppointments, setPreviousAppointments] = useState<any[]>([]);
    const [upcomingAppointments, setUpcomingAppointments] = useState<any[]>([]);
    const [moneyEarned, setMoneyEarned] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const previous = await DoctorService.getPreviousAppointments() as any[];
            const upcoming = await DoctorService.getUpcomingAppointments() as any[];
            const money = await DoctorService.getMoneyEarned() as any[];
            setPreviousAppointments(previous);
            setUpcomingAppointments(upcoming);
            setMoneyEarned(money);
        };
        fetchData();
    }, []);

    const handleCardClick = (path: string) => {
        navigate(path);
    };

    return (
        <Container maxWidth="lg">
            <Box mt={5}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card onClick={() => handleCardClick('/doctor/previous-appointments')} className="clickable-card">
                            <CardContent>
                                <Typography variant="h5" component="h2">
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
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card onClick={() => handleCardClick('/doctor/upcoming-appointments')} className="clickable-card">
                            <CardContent>
                                <Typography variant="h5" component="h2">
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
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card onClick={() => handleCardClick('/doctor/money-earned')} className="clickable-card">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Money Earned
                                </Typography>
                                <List>
                                    {moneyEarned.map((earning: any) => (
                                        <ListItem key={earning.id}>
                                            <ListItemText
                                                primary={`${earning.amount}`}
                                                secondary={`${earning.date} - ${earning.description}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DoctorHome;