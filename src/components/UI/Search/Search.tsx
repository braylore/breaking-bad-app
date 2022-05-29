import TextField from '@mui/material/TextField';
import { ChangeEvent, FC } from 'react';

interface ISearchProps {
  query: string;
  handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

const Search: FC<ISearchProps> = ({ handleQueryChange, query, isDisabled }) => {
  return (
    <div>
      <TextField
        disabled={isDisabled}
        sx={{
          mt: '15px'
        }}
        type="search"
        placeholder="Search for a character"
        label="Search"
        variant="standard"
        value={query}
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default Search;
