import React, { useState } from 'react';
import { Typography, Container, LinearProgress } from '@mui/material';
import Dropzone from '../../components/Dropzone';
import Navbar from '../../components/Navbar';
import { CustomButton, FileDetails } from './styles';

const Dashboard = () => {
    const [fileInfo, setFileInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [analysisCompleted, setAnalysisCompleted] = useState(false);

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
            reader.onload = () => {
                setFileInfo({
                    name: file.name,
                    size: file.size
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleStartAnalysis = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setAnalysisCompleted(true);
        }, 3000);
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
                    <FileDetails>
                        <Typography variant="body1" style={{ marginRight: '10px' }}>
                            {fileInfo.name}
                        </Typography>
                        <Typography variant="body1">
                            {`${(fileInfo.size / 1024).toFixed(2)} KB`}
                        </Typography>
                    </FileDetails>
                )}

                {fileInfo && !loading && !analysisCompleted && (
                    <CustomButton
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={handleStartAnalysis}
                    >
                        Começar
                    </CustomButton>
                )}

                {loading && <LinearProgress style={{ width: '100%', marginTop: '20px' }} />}

                {analysisCompleted && (
                    <CustomButton
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        disabled={!fileInfo}
                    >
                        Ver resultado da análise
                    </CustomButton>
                )}
            </Container>
        </>
    );
};

export default Dashboard;
