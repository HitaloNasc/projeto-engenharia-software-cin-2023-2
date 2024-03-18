import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)({
    backgroundColor: '#0B409C',
    '&:hover': {
        backgroundColor: '#10316B',
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
    //backgroundColor: '#68B2C9',
    //'&:hover': {
    //    backgroundColor: '#538FA2',
    // },
    // color: 'white',
    borderRadius: '5px',
    textAlign: 'center',
    textTransform: 'none',
    fontSize: '1rem',
});