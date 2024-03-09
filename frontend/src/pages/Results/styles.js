import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)({
    backgroundColor: '#AC8DF2',
    '&:hover': {
        backgroundColor: '#9C27B0',
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
    backgroundColor: '#FECD2A',
    '&:hover': {
        backgroundColor: '#FFC107',
    },
    color: 'black',
    borderRadius: '5px',
    textAlign: 'center',
    textTransform: 'none',
    fontSize: '1rem',
});