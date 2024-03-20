import React, { useState } from 'react';
import { Typography, Container, List, ListItem, ListItemText, Box } from '@mui/material';
import Navbar from '../../components/Navbar';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';
import { Link } from 'react-router-dom';
import { CustomButton, UpdateButton } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const Results = () => {
    const resultsData = require('./results.json');
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedResultId, setSelectedResultId] = useState(null);

    const handleUpdate = () => {
        console.log('Atualizar resultados');
    };

    const handleDelete = (resultId) => {
        setSelectedResultId(resultId);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        console.log('Excluir análise com ID:', selectedResultId);
        setDeleteModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                    <Typography variant="h5">
                        Resultados
                    </Typography>
                    <UpdateButton variant="outlined" color="primary" onClick={handleUpdate} sx={{ minWidth: '100px' }}>
                        Atualizar
                    </UpdateButton>
                </Box>

                <List>
                    {resultsData.map((result) => (
                        <ListItem key={result.id} disablePadding>
                            <ListItemText
                                primary={<Typography variant="body1" sx={{ overflowWrap: 'break-word', wordWrap: 'break-word', maxWidth: '400px' }}>{result.fileName.length > 45 ? `${result.fileName.slice(0, 45)}...` : result.fileName}</Typography>}
                                secondary={`Data: ${result.date}`}
                            />
                            <CustomButton
                                variant="contained"
                                color="primary"
                                component={Link}
                                to={`/results/${result.id}`}
                                sx={{ minWidth: '100px', maxWidth: '200px', flexShrink: 0, marginRight: '10px' }}
                            >
                                Ver detalhes
                            </CustomButton>
                            <DeleteIcon data-testid={`delete-button-${result.id}`} color="#F5F6FA" sx={{ cursor: 'pointer', color: '#45454D' }} onClick={() => handleDelete(result.id)} />
                        </ListItem>
                    ))}
                </List>

                <DeleteConfirmationModal
                    open={deleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                />
            </Container>
        </>
    );
};

export default Results;
