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
          fontWeight: '500',
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
    },
    MuiAccordion: {
      styleOverrides: {
        rounded: {
          boxShadow: 'none',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: '#2e5632',
          '&.Mui-focusVisible': {
            backgroundColor: '#35663a'
          }
        }
      }
    },
    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          color: '#ffffff4d'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontWeight: '500',
          borderColor: '#767877',
          color: '#fff',
          '&:hover': {
            borderColor: '#f5c524'
          },
          '&:focus': {
            borderColor: '#f5c524'
          },
          '&.Mui-selected': {
            backgroundColor: '#2e5632',
            borderColor: '#f5c524',
            color: '#f5c524',
            '&:hover': {
              backgroundColor: '#37683c'
            }
          }
        }
      }
    }
  },
  palette: {
    background: {
      paper: '#2e5632'
    }
  }
});
