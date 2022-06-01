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
        This port<span className={styles.textWrapper}>Al</span> is dedicated to one of{' '}
        <span className={styles.textWrapper}>Th</span>e greatest television series of all{' '}
        <span className={styles.textWrapper}>Ti</span>me.
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
