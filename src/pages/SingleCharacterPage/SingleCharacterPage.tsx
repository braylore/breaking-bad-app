import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Loader from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCharacterByName } from '../../store/actions/actions';
import { getFormattedCharInfo } from '../../utils/getFormattedCharInfo';
import { specificCharacterOnUnmount } from '../../store/reducers/specificCharacterSlice';
import mainStyles from '../../styles/main.module.scss';
import Btn from '../../components/UI/Btn/Btn';

const SingleCharacterPage = () => {
  const dispatch = useAppDispatch();
  const { character, error, isLoading } = useAppSelector((state) => state.specificCharacterReducer);
  const { name } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (name) {
      dispatch(fetchCharacterByName(name));
    }
    return () => {
      dispatch(specificCharacterOnUnmount());
    };
  }, [name]);

  const charInfo = getFormattedCharInfo(character);

  return (
    <>
      <Btn
        handleClick={handleClick}
        text="Back"
      />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={mainStyles.msg}>An error occurred while loading character. Please try again later.</h1>
      ) : Array.isArray(charInfo) ? (
        <h1 className={mainStyles.msg}>No character found.</h1>
      ) : (
        <CharacterInfo charInfo={charInfo} />
      )}
    </>
  );
};

export default SingleCharacterPage;
