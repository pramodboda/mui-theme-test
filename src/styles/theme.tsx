import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500], // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
    error: {
      main: '#d32f2f', // Custom error color
    },
    background: {
      default: '#f4f4f4', // Custom background color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#757575', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    // Customize more typography settings for h3, h4, etc.
  },
  spacing: 8, // Custom spacing unit (default is 8px)
  shape: {
    borderRadius: 8, // Set default border radius for components
  },
  components: {
    // Customizing specific components
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase text transform for buttons
          borderRadius: 12, // Custom border radius for buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Custom box shadow for cards
        },
      },
    },
  },
});

