import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bbLogo from '../../assets/img/bbLogo.png';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import styles from './header.module.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Box>
      <AppBar
        elevation={8}
        sx={{ backgroundColor: '#191e19' }}
        position="static"
      >
        <Toolbar>
          <IconButton
            onClick={handleClick}
            sx={{
              width: '110px',
              height: '80px',
              mr: '10px'
            }}
          >
            <img
              className={styles.logo}
              src={bbLogo}
              alt="Breaking Bad logo"
            />
          </IconButton>
          <Breadcrumbs />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
