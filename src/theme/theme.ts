import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            color: '#f5c524'
          },
          border: '1px solid #fff',
          textTransform: 'unset',
          '&:hover': {
            backgroundColor: '#24c05852'
          },
          color: '#fff',
          '&.Mui-selected': {
            color: '#f5c524',
            backgroundColor: '#24c05852',
            '&.Mui-disabled': {
              color: '#00000042'
            },
            '&:hover': {
              backgroundColor: '#24c05852'
            }
          },
          '&.Mui-disabled': {
            border: '1px solid #fff'
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          color: '#f5c524'
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        focusHighlight: {
          opacity: 0.3
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#f5c524'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#f5c524',
          '&.Mui-focused': {
            color: '#f5c524'
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:after': {
            borderBottomColor: '#f5c524'
          },
          '&:before': {
            borderBottomColor: '#fff'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#fff'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          color: '#f5c524'
        },
        root: {
          '&::before': {
            borderColor: '#f5c524'
          },
          '&::after': {
            borderColor: '#f5c524'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: '1px solid #c79e17',
          color: '#c79e17',
          '&:hover': {
            color: '#f5c524',
            border: '1px solid #f5c524'
          }
        }
      }
    }
  },
  palette: {
    background: {
      paper: '#243e27'
    }
  }
});
