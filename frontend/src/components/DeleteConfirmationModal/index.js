import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const DeleteConfirmationModal = ({ open, onClose, onConfirm }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: 'fit-content',
                    maxWidth: '80vw',
                    bgcolor: 'background.paper',
                    borderRadius: '8px',
                    p: 4,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                    outline: 'none',
                }}
            >
                <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                    Tem certeza que deseja excluir a análise?
                </Typography>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button onClick={onClose} sx={{ mr: 2 }}>Cancelar</Button>
                    <Button variant="contained" onClick={onConfirm} style={{ backgroundColor: '#0B409C' }}>Excluir</Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteConfirmationModal;
