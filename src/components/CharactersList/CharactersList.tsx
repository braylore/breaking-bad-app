/* eslint-disable camelcase */
import { FC } from 'react';
import { Grid } from '@mui/material';
import { ICharacters } from '../../types/ICharacters';
import CharactersListItem from '../CharactersListItem/CharactersListItem';

interface ICharactersListProps {
  charList: ICharacters[];
}

const CharactersList: FC<ICharactersListProps> = ({ charList }) => {
  return (
    <Grid
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        mt: '30px'
      }}
      spacing={1}
      container
    >
      {charList.map(({ img, char_id, name }) => {
        return (
          <CharactersListItem
            key={char_id}
            img={img}
            name={name}
          />
        );
      })}
    </Grid>
  );
};

export default CharactersList;
