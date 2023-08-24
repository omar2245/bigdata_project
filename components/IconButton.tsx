import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';

interface Props {
  icon: JSX.Element;
}

function IconButton({ icon }: Props) {
  return (
    <MuiIconButton
      sx={{
        border: '1px solid',
        borderRadius: '8px',
        borderColor: 'secondary.main',
        width: '30px',
        height: '30px',
        svg: {
          width: '16px',
          height: '16px',
          color: 'white',
        },
      }}
    >
      {icon}
    </MuiIconButton>
  );
}

export default IconButton;
