import { Button } from '@mui/material';
import { FC } from 'react';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

interface IBtnProps {
  handleClick: () => void;
  text: string;
}

const Btn: FC<IBtnProps> = ({ handleClick, text }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: 'unset',
        mt: '25px',
        ml: '30px'
      }}
      onClick={handleClick}
    >
      <ArrowCircleLeftOutlinedIcon />
      {text}
    </Button>
  );
};

export default Btn;
