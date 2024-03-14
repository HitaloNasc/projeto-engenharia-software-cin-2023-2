import React from 'react';
import { Typography } from '@mui/material';
import { StyledDropzone } from './styles';

const Dropzone = ({ onDrop, onDragOver, onDragLeave }) => {
  return (
    <StyledDropzone
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <Typography>ou arraste e solte o PDF aqui</Typography>
    </StyledDropzone>
  );
};

export default Dropzone;
