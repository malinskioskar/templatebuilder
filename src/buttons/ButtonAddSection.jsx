import React from 'react';
import { StyledSectionButton } from '../styles';

const ButtonAddSection = ({title, onAddSection}) => {
  return (
    <div>
        <StyledSectionButton onClick={onAddSection}>
          {title}
        </StyledSectionButton>
    </div>
  );
}


export default ButtonAddSection;