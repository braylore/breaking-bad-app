import { FC, MouseEvent } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { PayloadCharactersListFilter } from '../../../types/PayloadCharactersList';

interface IToggleBtnsProps {
  filter: PayloadCharactersListFilter;
  handleChange: (event: MouseEvent<HTMLElement>, newFilter: PayloadCharactersListFilter) => void;
  isDisabled: boolean;
}

const ToggleBtns: FC<IToggleBtnsProps> = ({ handleChange, isDisabled, filter }) => {
  return (
    <ToggleButtonGroup
      disabled={isDisabled}
      sx={{
        mt: '20px'
      }}
      value={filter}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="Breaking Bad">Breaking Bad</ToggleButton>
      <ToggleButton value="Better Call Saul">Better Call Saul</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtns;
