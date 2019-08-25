import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HeartRating.css';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  }
})(Rating);

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`;
}

export default function HeartRatings() {
  return (
    <div className = 'heart'>
        <StyledRating
          name="customized-color"
          value={3}
          getLabelText={getLabelText}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          size='large'
        />
    </div>
  );
}