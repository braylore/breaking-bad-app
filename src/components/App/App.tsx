import { Routes, Route } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import CharactersPage from '../../pages/CharactersPage/CharactersPage';
import EpisodesPage from '../../pages/EpisodesPage/EpisodesPage';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';
import SingleCharacterPage from '../../pages/SingleCharacterPage/SingleCharacterPage';
import SingleEpisodePage from '../../pages/SingleEpisodePage/SingleEpisodePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Layout from '../Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<AboutPage />}
        />
        <Route
          path="Characters"
          element={<CharactersPage />}
        />
        <Route
          path="Characters/:name"
          element={<SingleCharacterPage />}
        />
        <Route
          path="Episodes"
          element={<EpisodesPage />}
        />
        <Route
          path="Episodes/:series/:season/:episode/:episodeId"
          element={<SingleEpisodePage />}
        />
        <Route
          path="Gallery"
          element={<GalleryPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
