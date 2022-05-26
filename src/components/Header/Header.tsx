import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';

const Header = () => {
  return (
    <Box>
      <AppBar
        elevation={8}
        sx={{ p: 1, backgroundColor: '#191e19' }}
        position="static"
      >
        <Toolbar>
          <Typography
            sx={{
              mr: '25px'
            }}
            variant="h6"
            component="div"
          >
            Breaking Bad App
          </Typography>
          <Breadcrumbs />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
