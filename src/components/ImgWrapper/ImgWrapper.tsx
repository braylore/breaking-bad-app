import { Card, CardActionArea, CardMedia, Modal } from '@mui/material';
import { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './imgWrapper.module.scss';

interface IImgWrapperProps {
  imgLink: string;
  aspectRatio: number;
  alt: string;
}

const ImgWrapper: FC<IImgWrapperProps> = ({ imgLink, aspectRatio, alt }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const height = aspectRatio.toFixed() === '1' ? 400 : 190;
  const width = aspectRatio.toFixed() === '1' ? 270 : 295;

  return (
    <Card sx={{ width, m: '0 auto' }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          loading="lazy"
          component="img"
          image={imgLink}
          alt={alt}
          sx={{ height }}
        />
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={styles.wrapper}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              cursor: 'pointer',
              color: '#f5c524',
              position: 'absolute',
              right: '0',
              top: '-22px'
            }}
          />
          <img
            loading="lazy"
            alt={alt}
            src={imgLink}
          />
        </div>
      </Modal>
    </Card>
  );
};

export default ImgWrapper;
