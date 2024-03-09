import React from 'react';
import { Typography, Container, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { CustomButton, UpdateButton } from './styles';

const Results = () => {
    const resultsData = require('./results.json');

    const handleUpdate = () => {
        console.log('Atualizar resultados');
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                    <Typography variant="h5">
                        Resultados
                    </Typography>
                    <UpdateButton variant="contained" color="primary" onClick={handleUpdate}>
                        Atualizar
                    </UpdateButton>
                </Box>

                <List>
                    {resultsData.map((result) => (
                        <ListItem key={result.id} disablePadding>
                            <ListItemText
                                primary={result.fileName}
                                secondary={`Data: ${result.date}`}
                            />
                            <CustomButton variant="contained" color="primary" component={Link} to={`/results/${result.id}`}>
                                Ver detalhes
                            </CustomButton>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </>
    );
};

export default Results;
