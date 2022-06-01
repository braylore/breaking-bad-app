import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IEpisodes } from '../../../types/IEpisodes';
import styles from './accordion.module.scss';

interface ISimpleAccordionProps {
  label: string;
  episodes: IEpisodes[];
}

const SimpleAccordion: FC<ISimpleAccordionProps> = ({ label, episodes }) => {
  return (
    <Accordion
      sx={{
        color: '#fff'
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {episodes.map((e) => {
          return (
            <Typography key={e.title}>
              <Link to={`${e.series}/${e.season}/${e.episode}/${e.episode_id}`}>
                <span className={styles.textWrapper}>
                  {e.episode}. {e.title}
                </span>
              </Link>
            </Typography>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default SimpleAccordion;
