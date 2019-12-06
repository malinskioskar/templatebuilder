import React from 'react';
import { StyledButton, StyledGreenButton, StyledExportButton } from '../styles';
import { SETTINGS } from '../utils/Settings';

const Button = ({title, onClick, buttonType}) => {
  let button;
  if (buttonType === SETTINGS.ADD_SECTION_BUTTON_TYPE) {
    button = 
      <StyledButton onClick={onClick}>
          {title}
      </StyledButton>
  } else if (buttonType === SETTINGS.ADD_QUESTION_BUTTON_TYPE) {
    button = 
      <StyledGreenButton onClick={onClick}>
          {title}
      </StyledGreenButton>
  } else if (buttonType === SETTINGS.SAVE_TEMPLATE_BUTTON_TYPE) {
    button = 
      <StyledExportButton onClick={onClick}>
          {title}
      </StyledExportButton>
  }
  return (
    <div>
        {button}
    </div>
  );
}


export default Button;