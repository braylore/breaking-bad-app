import { Typography } from '@mui/material';
import img from '../../assets/img/logoAboutPage.png';
import styles from './aboutPage.module.scss';

const AboutPage = () => {
  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#fff',
          mt: '30px'
        }}
      >
        This portal is dedicated to one of the greatest television series of all time
      </Typography>
      <div className={styles.wrapper}>
        <img
          alt="Breaking Bad logo"
          src={img}
        />
      </div>
    </>
  );
};

export default AboutPage;
