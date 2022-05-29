import CloseIcon from '@mui/icons-material/Close';
import { Button, Divider, Grid } from '@mui/material';
import { FC, useEffect } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRandomQuote } from '../../store/actions/actions';
import { IGetFormattedCharInfo } from '../../utils/getFormattedCharInfo';
import Loader from '../UI/Loader/Loader';
import styles from './charInfo.module.scss';
import mainStyles from '../../styles/main.module.scss';
import { IQuote } from '../../types/IQuote';

interface ICharacterInfoProps {
  charInfo: IGetFormattedCharInfo;
}

const CharacterInfo: FC<ICharacterInfoProps> = ({ charInfo }) => {
  const {
    bcsFormattedAppearance,
    formattedAppearance,
    formattedOccupation,
    img,
    name,
    nickname,
    portrayed,
    status,
    birthday
  } = charInfo;

  const dispatch = useAppDispatch();
  const { error, isLoading, quote = [] } = useAppSelector((state) => state.quoteReducer);

  useEffect(() => {
    dispatch(fetchRandomQuote(name));
  }, [name]);

  const handleClick = () => {
    dispatch(fetchRandomQuote(name));
  };

  const renderQuote = (quoteArr: IQuote[]) => {
    if (error) {
      return <h3 className={mainStyles.msg}>An error occurred while loading quote. Please try again later.</h3>;
    }

    if (!quoteArr.length) {
      return null;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Divider>Quotes</Divider>
        <div>{quote[0]?.quote}</div>
        <Button
          variant="outlined"
          sx={{
            textTransform: 'unset',
            mt: '25px'
          }}
          onClick={handleClick}
        >
          <CachedIcon />
          Click to show random quote
        </Button>
      </>
    );
  };

  const quoteElem = renderQuote(quote);

  return (
    <>
      <h1 className={mainStyles.msg}>{name}</h1>
      <Grid
        spacing={2}
        sx={{
          justifyContent: 'center',
          color: '#fff'
        }}
        container
      >
        <Grid
          sx={{
            maxHeight: '650px'
          }}
          sm={6}
          md={6}
          xs={12}
          item
        >
          <img
            className={styles.img}
            src={img}
            alt={name}
          />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={6}
          item
        >
          <Divider>Nickname</Divider>
          <div>{nickname}</div>
          <Divider>Birthday</Divider>
          <div>{birthday}</div>
          <Divider>Portrayed</Divider>
          <div>{portrayed}</div>
          <Divider>Occupation</Divider>
          <div>{formattedOccupation}</div>
          <Divider>Breaking Bad appearance</Divider>
          {formattedAppearance ? <div>Seasons: {formattedAppearance}</div> : <CloseIcon />}
          <Divider>Better Call Saul appearance</Divider>
          {bcsFormattedAppearance ? <div>Seasons: {bcsFormattedAppearance}</div> : <CloseIcon />}
          <Divider>Status</Divider>
          <div>{status}</div>
          {quoteElem}
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterInfo;
