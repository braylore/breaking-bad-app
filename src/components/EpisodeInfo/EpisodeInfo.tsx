import { FC, useEffect } from 'react';
import { Divider, Grid, Paper } from '@mui/material';
import Rating from '@mui/material/Rating';
import { IEpisodesIMDBParams } from '../../types/IEpisodesIMDB';
import mainStyles from '../../styles/main.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEpisodeById } from '../../store/actions/actions';
import Loader from '../UI/Loader/Loader';
import { IEpisodes } from '../../types/IEpisodes';
import styles from './episodeInfo.module.scss';
import { episodeOnUnmount } from '../../store/reducers/episodesSlice';

interface IEpisodeInfoProps {
  episodeInfo: IEpisodesIMDBParams;
  episodeId: string | undefined;
}

const EpisodeInfo: FC<IEpisodeInfoProps> = ({ episodeId, episodeInfo }) => {
  const dispatch = useAppDispatch();
  const { episode, error, isLoading } = useAppSelector((state) => state.episodesReducer);

  useEffect(() => {
    if (episodeId) {
      dispatch(fetchEpisodeById(episodeId));
    }
    return () => {
      dispatch(episodeOnUnmount());
    };
  }, []);

  const renderCharactersList = (episodeById: IEpisodes[]) => {
    if (isLoading) {
      return <Loader />;
    }
    if (error || episodeById.length === 0) {
      return null;
    }

    return (
      <>
        <Divider>Characters</Divider>
        <div>{episodeById[0].characters.join(', ')}</div>
      </>
    );
  };

  const charactersElem = renderCharactersList(episode);

  return (
    <>
      <h1 className={mainStyles.msg}>{episodeInfo.title}</h1>
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
          sm={10}
          md={6}
          xs={12}
          item
        >
          <Paper
            sx={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
            component="img"
            src={episodeInfo.image}
            alt={`${episodeInfo.title} img`}
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          item
        >
          <Divider>Plot</Divider>
          <div>{episodeInfo.plot}</div>
          <Divider>Released</Divider>
          <div>{episodeInfo.released}</div>
          <Divider>Season</Divider>
          <div>{episodeInfo.seasonNumber}</div>
          <Divider>Episode</Divider>
          <div>{episodeInfo.episodeNumber}</div>
          <Divider>IMDB Rating</Divider>
          <div className={styles.wrapper}>
            <Rating
              sx={{
                mr: '5px'
              }}
              precision={0.1}
              max={10}
              value={+episodeInfo.imDbRating}
              readOnly
            />

            {episodeInfo.imDbRating}
          </div>
          {charactersElem}
        </Grid>
      </Grid>
    </>
  );
};

export default EpisodeInfo;
