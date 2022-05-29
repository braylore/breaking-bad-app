import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCharacters } from '../../store/actions/actions';
import ToggleBtns from '../../components/UI/ToggleBtns/ToggleBtns';
import Loader from '../../components/UI/Loader/Loader';
import { ICharacters } from '../../types/ICharacters';
import Search from '../../components/UI/Search/Search';
import CharactersList from '../../components/CharactersList/CharactersList';
import mainStyles from '../../styles/main.module.scss';

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { characters, error, isLoading } = useAppSelector((state) => state.charactersReducer);
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const handleClick = (value: string) => {
    dispatch(fetchCharacters(value));
  };

  const searchChar = (chars: ICharacters[], searchQuery: string) => {
    if (Array.isArray(chars)) {
      return chars.filter((c) => c.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
    }
    return [];
  };

  const charList = searchChar(characters, query);

  if (error || !Array.isArray(characters)) {
    return <h2 className={mainStyles.msg}>An error occurred while loading characters. Please try again later.</h2>;
  }

  return (
    <>
      <ToggleBtns
        isDisabled={isLoading}
        handleClick={handleClick}
      />
      <Search
        isDisabled={isLoading}
        query={query}
        handleQueryChange={handleQueryChange}
      />
      {isLoading ? (
        <Loader />
      ) : charList.length ? (
        <CharactersList charList={charList} />
      ) : (
        <h2 className={mainStyles.msg}>No characters found.</h2>
      )}
    </>
  );
};

export default CharactersPage;
