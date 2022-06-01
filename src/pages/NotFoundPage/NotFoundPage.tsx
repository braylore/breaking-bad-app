import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './notFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.wrapper}>
      <h2>Page doesn&apos;t exist.</h2>
      <Button
        sx={{
          textTransform: 'unset',
          fontSize: '18px'
        }}
        onClick={handleClick}
        variant="outlined"
      >
        Back to main page
      </Button>
    </div>
  );
};

export default NotFoundPage;
