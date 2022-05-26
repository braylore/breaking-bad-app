import ReactDOM from 'react-dom/client';
import './index.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { store } from './store/store';

const theme = createTheme({
  components: {
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
    }
  },
  palette: {
    background: {
      paper: '#243e27'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </BrowserRouter>
);

