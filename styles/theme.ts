'use client';

import { createTheme } from '@mui/material/styles';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
});

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
    fontFamily: ubuntu.style.fontFamily,
    h4: {
      fontSize: '32px',
    },
    h6: {
      fontSize: '16px',
    },
  },
});

export default theme;
