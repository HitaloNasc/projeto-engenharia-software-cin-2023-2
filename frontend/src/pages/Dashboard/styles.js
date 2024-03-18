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
  padding: '10px 15px',
  fontSize: '1.4rem',
  margin: 'auto',
  display: 'block',
});

export const FileDetails = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '20px',
});