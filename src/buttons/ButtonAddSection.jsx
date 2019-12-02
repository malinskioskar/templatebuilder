import React from 'react';
import { StyledSectionButton } from '../styles';

const ButtonAddSection = () => {
  return (
    <div>
        <StyledSectionButton onClick={()=>{console.log('button clicked');}}>
          {'TITLE'}
        </StyledSectionButton>
    </div>
  );
}


export default ButtonAddSection;