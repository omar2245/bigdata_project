'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#661fff',
      dark: '#4d1ea8',
    },
    secondary: {
      main: '#b388ff',
      light: '#C29FFF',
    },
  },
  typography: {
    h4: {
      fontSize: '32px',
    },
    h6: {
      fontSize: '16px',
    },
  },
});

export default theme;
