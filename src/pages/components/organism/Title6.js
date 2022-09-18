import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export default function Title6() {
  return (
    <Container sx={{marginTop : '2vh'}}>
     <ThemeProvider theme={theme}>
      <Typography variant="h3">My Profile</Typography>
      <Typography variant="caption">Manage your profile information</Typography>
    </ThemeProvider>
    </Container>
  
  );
}
