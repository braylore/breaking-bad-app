import { useEffect } from 'react';
import Accordion from '../../components/UI/Accordion/Accordion';
import mainStyles from '../../styles/main.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchEpisodes } from '../../store/actions/actions';
import { breakingBadSeasonsArr } from '../../constants/breakingBadSeasons';
import Loader from '../../components/UI/Loader/Loader';

const EpisodesPage = () => {
  const dispatch = useAppDispatch();
  const { episodes, error, isLoading } = useAppSelector((state) => state.episodesReducer);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className={mainStyles.msg}>An error occurred while loading episodes. Please try again later.</h2>;
  }

  const betterCallSaulSeasonsSet = new Set();

  episodes.forEach((e) => {
    if (e.series === 'Better Call Saul') {
      betterCallSaulSeasonsSet.add(e.season);
    }
  });

  const betterCallSaulSeasonsArr = [...betterCallSaulSeasonsSet] as string[];

  return (
    <>
      <h2 className={mainStyles.msg}>Breaking Bad</h2>
      {breakingBadSeasonsArr.map((s) => {
        const ep = episodes.filter((e) => {
          if (parseInt(e.season, 10) === parseInt(s, 10) && e.series === 'Breaking Bad') {
            return e;
          }
          return null;
        });
        return (
          <Accordion
            key={s}
            episodes={ep}
            label={`Season ${s}`}
          />
        );
      })}
      <h2 className={mainStyles.msg}>Better Call Saul</h2>
      {betterCallSaulSeasonsArr.map((s) => {
        const ep = episodes.filter((e) => {
          if (parseInt(e.season, 10) === parseInt(s, 10) && e.series === 'Better Call Saul') {
            return e;
          }
          return null;
        });
        return (
          <Accordion
            key={s}
            episodes={ep}
            label={`Season ${s}`}
          />
        );
      })}
    </>
  );
};

export default EpisodesPage;
