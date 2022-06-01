import { ChangeEvent, MouseEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCharacters } from '../../store/actions/actions';
import ToggleBtns from '../../components/UI/ToggleBtns/ToggleBtns';
import Loader from '../../components/UI/Loader/Loader';
import { ICharacters } from '../../types/ICharacters';
import Search from '../../components/UI/Search/Search';
import CharactersList from '../../components/CharactersList/CharactersList';
import Pagination from '../../components/UI/Pagination/Pagination';
import mainStyles from '../../styles/main.module.scss';
import { getNumberOfPage } from '../../utils/getNumberOfPage';
import { getSlicedEntities } from '../../utils/getSlicedEntities';
import { currentPageChanged, filterChanged, searchQueryChanged } from '../../store/reducers/charactersListSlice';
import { PayloadCharactersListFilter } from '../../types/PayloadCharactersList';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { characters, error, isLoading, currentPage, filter, searchQuery } = useAppSelector(
    (state) => state.charactersListReducer
  );
  const divRef = useRef<HTMLDivElement | null>(null);
  const didMount = useRef<boolean>(false);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchQueryChanged(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchCharacters(filter));
  }, [filter]);

  useDidMountEffect(didMount, () => dispatch(currentPageChanged(1)), [filter, searchQuery]);

  const handleFilterChange = (event: MouseEvent<HTMLElement>, value: PayloadCharactersListFilter) => {
    dispatch(filterChanged(value));
  };

  const handlePaginationChange = (e: ChangeEvent<unknown>, page: number) => {
    if (page === currentPage) {
      return;
    }
    dispatch(currentPageChanged(page));

    if (divRef.current) {
      divRef.current.scrollIntoView();
    }
  };

  const searchChar = (chars: ICharacters[], query: string) => {
    if (Array.isArray(chars)) {
      return chars.filter((c) => c.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    }
    return [];
  };

  const charList = searchChar(characters, searchQuery);
  const totalPages = getNumberOfPage(charList.length, 8);
  const slicedCharList = getSlicedEntities(8, currentPage, charList);

  if (error || !Array.isArray(characters)) {
    return <h2 className={mainStyles.msg}>An error occurred while loading characters. Please try again later.</h2>;
  }

  return (
    <>
      <ToggleBtns
        filter={filter}
        isDisabled={isLoading}
        handleChange={handleFilterChange}
      />
      <Search
        isDisabled={isLoading}
        query={searchQuery}
        handleQueryChange={handleQueryChange}
      />
      {isLoading ? (
        <Loader />
      ) : slicedCharList.length ? (
        <>
          <div ref={divRef} />
          <CharactersList charList={slicedCharList} />
          <Pagination
            changePage={handlePaginationChange}
            currentPage={currentPage}
            totalPage={totalPages}
          />
        </>
      ) : (
        <h2 className={mainStyles.msg}>No characters found.</h2>
      )}
    </>
  );
};

export default CharactersPage;
