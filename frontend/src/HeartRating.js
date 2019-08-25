import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HeartRating.css';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`;
}

export default function HeartRatings() {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent" className = 'heart'>
        <Typography component="legend"></Typography>
        <StyledRating
          name="customized-color"
          value={2}
          getLabelText={getLabelText}
          precision={0.5}
          icon={<FavoriteIcon fontSize='20px' />}
        />
      </Box>
    </div>
  );
}