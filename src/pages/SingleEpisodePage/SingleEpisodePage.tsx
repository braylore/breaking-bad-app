import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BB_ID_IMDB, BCS_ID_IMDB } from '../../constants/urls';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEpisodesIMDB } from '../../store/actions/actions';
import EpisodeInfo from '../../components/EpisodeInfo/EpisodeInfo';
import Loader from '../../components/UI/Loader/Loader';
import Btn from '../../components/UI/Btn/Btn';
import { episodesOnUnmount } from '../../store/reducers/episodesIMDBSlice';
import mainStyles from '../../styles/main.module.scss';

const SingleEpisodePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { series, season, episode, episodeId } = useParams();
  const { episodesIMDB = [], error, isLoading } = useAppSelector((state) => state.episodesIMDBReducer);

  const handleClick = () => {
    navigate(-1);
  };

  let seriesId: string;

  if (series === 'Breaking Bad') {
    seriesId = BB_ID_IMDB;
  } else {
    seriesId = BCS_ID_IMDB;
  }

  useEffect(() => {
    if (season) {
      dispatch(fetchEpisodesIMDB({ seasonNum: season, seriesId }));
    }
    return () => {
      dispatch(episodesOnUnmount());
    };
  }, [series, season, episode, episodeId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <>
        <Btn
          handleClick={handleClick}
          text="Back"
        />
        <h2 className={mainStyles.msg}>An error occurred while loading episode. Please try again later.</h2>
      </>
    );
  }

  if (episodesIMDB.length === 0) {
    return null;
  }

  const specificEpisode = episodesIMDB.filter((ep) => ep.episodeNumber === episode);

  return (
    <>
      <Btn
        handleClick={handleClick}
        text="Back"
      />
      <EpisodeInfo
        episodeId={episodeId}
        episodeInfo={specificEpisode[0]}
      />
    </>
  );
};

export default SingleEpisodePage;
