import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, Box, IconButton, InputAdornment } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Navbar from '../../components/Navbar';
import { CustomButton, StyledTextField } from './styles';

const data = require('./data.json');

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
};

const formatLabel = (label) => {
    return label.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
};

const Result = () => {
    const profile = data[0];
    const [textFields, setTextFields] = useState({});

    useEffect(() => {
        const updatedTextFields = {};
        Object.entries(profile).forEach(([key, value]) => {
            if (key !== "id" && key !== "date") {
                const lines = Math.ceil(value.length / 50);
                updatedTextFields[key] = lines > 1 ? { multiline: true, rows: lines } : {};
            }
        });
        setTextFields(updatedTextFields);
    }, [profile]);

    return (
        <>
            <Navbar />
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
                    <Typography variant="h5" style={{ flex: 1 }}>
                        {profile.nome}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body1" style={{ marginRight: 10 }}>
                            {profile.date}
                        </Typography>
                        <CustomButton variant="contained" color="primary" onClick={() => console.log("Ver documento")}>
                            Ver documento
                        </CustomButton>
                    </Box>
                </Box>

                <Typography variant="h6" gutterBottom>
                    Resultado
                </Typography>

                <Grid container spacing={2} alignItems="center" my={2}>
                    {Object.entries(profile).map(([key, value]) => {
                        if (key === "id" || key === "date") return null;
                        return (
                            <Grid item xs={12} key={key}>
                                <StyledTextField
                                    fullWidth
                                    label={formatLabel(key)}
                                    value={value}
                                    variant="outlined"
                                    InputProps={{
                                        readOnly: true,
                                        ...textFields[key],
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => copyToClipboard(value)} edge="end">
                                                    <FileCopyIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default Result;
