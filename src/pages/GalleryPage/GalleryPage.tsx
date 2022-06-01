import { Fade, Grid } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { fetchPosters } from '../../store/actions/actions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ImgWrapper from '../../components/ImgWrapper/ImgWrapper';
import { getSlicedEntities } from '../../utils/getSlicedEntities';
import { IPosterParams, IPosters } from '../../types/IPosters';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { useObserver } from '../../hooks/useObserver';
import Loader from '../../components/UI/Loader/Loader';
import mainStyles from '../../styles/main.module.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, posters } = useAppSelector((state) => state.postersReducer);
  const [slice, setSlice] = useState(1);
  const [slicedPosters, setSlicedPosters] = useState<IPosterParams[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  const didMount = useRef(false);
  const observer = useRef<IntersectionObserver | undefined>();

  useDidMountEffect(
    didMount,
    () =>
      useObserver(observer, divRef, slicedPosters.length < 88 && posters.length > 0 && !error, isLoading, () =>
        setSlice(slice + 1)
      ),
    [slicedPosters]
  );

  useEffect(() => {
    dispatch(fetchPosters()).then((r) => {
      const payload = r.payload as IPosters;
      setSlicedPosters(getSlicedEntities(18, slice, payload.backdrops.concat(payload.posters)));
    });
  }, []);

  useEffect(() => {
    setSlicedPosters([...slicedPosters, ...getSlicedEntities(18, slice, posters)]);
  }, [slice]);

  return (
    <>
      {isLoading ? <Loader /> : null}
      {error ? (
        <h2 className={mainStyles.msg}>An error occurred while loading the gallery. Please try again later.</h2>
      ) : null}
      <Grid
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          mt: '30px'
        }}
        spacing={1}
        container
      >
        <TransitionGroup component={null}>
          {slicedPosters.length === 0
            ? null
            : slicedPosters.map((p, i) => (
                <Fade
                  key={p.id}
                  timeout={350}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <ImgWrapper
                      alt={`BB img ${i + 1}`}
                      aspectRatio={p.aspectRatio}
                      imgLink={p.link}
                    />
                  </Grid>
                </Fade>
              ))}
        </TransitionGroup>
      </Grid>
      <div
        className={mainStyles.wrapper}
        ref={divRef}
      ></div>
    </>
  );
};

export default App;
