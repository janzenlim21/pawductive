import React, {useState, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HeartRating.css';
import { DogContext } from './DogContext';

var heartValue = 5;
const StyledRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  }
})(Rating);

function getLabelText(value) {
  return `${value} Heart${value !== 1 ? 's' : ''}`;
}

function pHeartValue(){
  heartValue++;
}

function mHeartValue(){
  heartValue--;
}
export default function HeartRatings() {

  const [heartState, setHeartState] = useState(5);
  const {state, changeState, setStateHappy, setStateSad} = useContext(DogContext);

  if (heartState < 5 && state === "happy"){
    setHeartState(prev => prev + 1);
  } else if (heartState > 0 && state === "sad"){
    setHeartState(prev => prev - 1);
  }

  return (
    <div className = 'heart'>
        <StyledRating
          name="customized-color"
<<<<<<< HEAD
          value={3}
=======
          value={heartState}
>>>>>>> 6a6fe37ffe4abac863d485a5d1ae0a2cec5e1801
          getLabelText={getLabelText}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          size='large'
        />
    </div>
  );
}
