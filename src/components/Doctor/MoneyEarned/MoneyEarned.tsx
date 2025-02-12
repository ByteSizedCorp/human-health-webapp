import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { DoctorService } from '../../../services/DoctorService';

const MoneyEarned: React.FC = () => {
    interface Earning {
        id: number;
        amount: number;
        date: string;
        description: string;
    }

    const [moneyEarned, setMoneyEarned] = useState<Earning[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const money = await DoctorService.getMoneyEarned() as Earning[];
            setMoneyEarned(money);
        };
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
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
            </Box>
        </Container>
    );
};

export default MoneyEarned;