import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          mb: '25px'
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
