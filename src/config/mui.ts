import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#16f36f',
      main: '#09ad4b',
      dark: '#033a19',
    },
    secondary: {
      light: '#6B7280',
      main: '#374151',
      dark: '#111827',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export { theme };
