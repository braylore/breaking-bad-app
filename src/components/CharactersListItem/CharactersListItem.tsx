import { Card, CardMedia, Grid, CardActionArea } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import styles from './charactersListItem.module.scss';

interface ICharactersListItemProps {
  name: string;
  img: string;
}

const CharactersListItem: FC<ICharactersListItemProps> = ({ img, name }) => {
  return (
    <Grid
      data-tip={name}
      sx={{
        height: '375px',
        width: '280px'
      }}
      lg={3}
      item
    >
      <Link to={`${name}`}>
        <Card
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          <CardActionArea
            sx={{
              height: '100%'
            }}
          >
            <CardMedia
              sx={{
                width: '100%',
                height: '100%'
              }}
              component="img"
              src={img}
              alt={name}
            />
            <ReactTooltip
              className={styles.tooltip}
              place="bottom"
              type="dark"
              effect="solid"
            />
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default CharactersListItem;
