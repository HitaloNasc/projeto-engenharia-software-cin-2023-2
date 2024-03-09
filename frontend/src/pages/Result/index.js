import React from 'react';
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

    return (
        <>
            <Navbar />
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
                    <Typography variant="h5">
                        {profile.nome}
                    </Typography>
                    <Typography variant="body1">
                        {profile.date}
                    </Typography>
                    <CustomButton variant="contained" color="primary">
                        Ver documento
                    </CustomButton>
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
