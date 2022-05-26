import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';

const CustomBreadcrumbs = () => {
  const breadcrumbs = [
    <NavLink
      key="1"
      to="/"
    >
      About
    </NavLink>,
    <NavLink
      key="2"
      to="/Characters"
    >
      Characters
    </NavLink>,
    <NavLink
      to="/Episodes"
      key="3"
    >
      Episodes
    </NavLink>,
    <NavLink
      to="/Gallery"
      key="4"
    >
      Gallery
    </NavLink>
  ];

  return (
    <Stack spacing={4}>
      <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadcrumbs;
