import { FC, MouseEvent, useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface IToggleBtnsProps {
  handleClick: (value: string) => void;
  isDisabled: boolean;
}

const ToggleBtns: FC<IToggleBtnsProps> = ({ handleClick, isDisabled }) => {
  const [category, setCategory] = useState('');

  const handleChange = (event: MouseEvent<HTMLElement>, newCategory: string) => {
    setCategory(newCategory);
    handleClick(newCategory);
  };

  return (
    <ToggleButtonGroup
      disabled={isDisabled}
      sx={{
        mt: '20px'
      }}
      value={category}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="Breaking Bad">Breaking Bad</ToggleButton>
      <ToggleButton value="Better Call Saul">Better Call Saul</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtns;
