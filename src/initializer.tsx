import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Props } from 'types/react';
import { ThemeProvider } from '@mui/material';

/** Services */
import { theme } from 'config/mui';
import 'config/dayjs';

/** CSS Files */
import 'styles/index.css';

function Initializer({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {children}
      </Router>
    </ThemeProvider>
  );
}

export default Initializer;
