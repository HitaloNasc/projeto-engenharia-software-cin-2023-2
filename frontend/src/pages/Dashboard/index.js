import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import Dropzone from '../../components/Dropzone';
import { CustomButton } from './styles';
import Navbar from '../../components/Navbar';

const Dashboard = () => {
    const [fileInfo, setFileInfo] = useState(null);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        handleFile(selectedFile);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
    };

    const handleFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            setFileInfo({
                name: file.name,
                size: file.size
            });
        }
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="sm">
                <Typography variant="h5" textAlign="center" marginY={4}>
                    Converta imagens em PDF em texto legível mapeado
                </Typography>

                <CustomButton variant="contained" component="label">
                    Selecionar arquivo PDF
                    <input
                        type="file"
                        hidden
                        onChange={handleFileSelect}
                        accept="application/pdf"
                    />
                </CustomButton>

                <Dropzone
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                />

                {fileInfo && (
                    <div>
                        <Typography variant="body1">
                            {fileInfo.name}
                        </Typography>
                        <Typography variant="body1">
                            {`${(fileInfo.size / 1024).toFixed(2)} KB`}
                        </Typography>
                    </div>
                )}
            </Container>
        </>
    );
};

export default Dashboard;
