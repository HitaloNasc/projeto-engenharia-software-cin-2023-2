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