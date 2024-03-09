import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)({
    backgroundColor: '#AC8DF2',
    '&:hover': {
        backgroundColor: '#957BCF',
    },
    color: 'white',
    borderRadius: '5px',
    textAlign: 'center',
    textTransform: 'none',
    fontSize: '1rem',
    margin: 'auto',
    display: 'block',
});

export const UpdateButton = styled(Button)({
    backgroundColor: '#68B2C9',
    '&:hover': {
        backgroundColor: '#538FA2',
    },
    color: 'white',
    borderRadius: '5px',
    textAlign: 'center',
    textTransform: 'none',
    fontSize: '1rem',
});