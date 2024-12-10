import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

import LeftArrowIcon from './pics/left-arrow.png';
import RightArrowIcon from './pics/right-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  {data.map((item) => (
    <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 40px"
    >
      {bodyParts ? 
        <BodyPart 
          item={item} 
          setBodyPart={setBodyPart} 
          bodyPart={bodyPart} 
          sx={{ backgroundColor: '#2C2F33', color: '#D3D3D3' }} // Updated background and text color for BodyPart
        /> : 
        <ExerciseCard 
          exercise={item} 
          sx={{ backgroundColor: '#2C2F33', color: '#D3D3D3' }} // Updated background and text color for ExerciseCard
        />
      }
    </Box>
  ))}
</ScrollMenu>

);

export default HorizontalScrollbar;